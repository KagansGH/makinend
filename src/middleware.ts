import { defineMiddleware } from "astro:middleware";
import { maintenanceMode, previewCookie, previewPath } from "./data/maintenance";

const ASSET_PREFIX = /^\/(_astro|images)\//;
const ASSET_EXT =
	/\.(css|js|mjs|map|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|txt|xml|json|webmanifest)$/i;

const PREVIEW_VALUE = "1";
const PREVIEW_MAX_AGE = 60 * 60 * 24 * 14;

function isAsset(pathname: string) {
	return ASSET_PREFIX.test(pathname) || ASSET_EXT.test(pathname);
}

function readCookieHeader(request: Request, name: string) {
	const header = request.headers.get("cookie");
	if (!header) return undefined;
	for (const part of header.split(";")) {
		const [rawKey, ...rest] = part.trim().split("=");
		if (rawKey === name) return rest.join("=");
	}
	return undefined;
}

function hasPreview(context: { cookies: { get: (name: string) => { value: string } | undefined }; request: Request }) {
	return (
		context.cookies.get(previewCookie)?.value === PREVIEW_VALUE ||
		readCookieHeader(context.request, previewCookie) === PREVIEW_VALUE
	);
}

function withMaintenanceStatus(response: Response) {
	const headers = new Headers(response.headers);
	headers.set("Retry-After", "86400");
	headers.set("Cache-Control", "no-store");
	return new Response(response.body, { status: 503, headers });
}

export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname } = context.url;
	const unlocked = !maintenanceMode || hasPreview(context);
	context.locals.siteUnlocked = unlocked;

	if (!maintenanceMode) {
		if (pathname === "/maintenance" || pathname === previewPath) {
			return context.redirect("/", 302);
		}
		return next();
	}

	if (pathname === previewPath) {
		context.cookies.set(previewCookie, PREVIEW_VALUE, {
			path: "/",
			httpOnly: true,
			sameSite: "lax",
			secure: context.url.protocol === "https:",
			maxAge: PREVIEW_MAX_AGE,
		});
		return context.redirect("/", 302);
	}

	if (isAsset(pathname)) {
		return next();
	}

	if (unlocked) {
		if (pathname === "/maintenance") {
			return context.redirect("/", 302);
		}
		return next();
	}

	const response = pathname === "/maintenance" ? await next() : await next("/maintenance");
	return withMaintenanceStatus(response);
});
