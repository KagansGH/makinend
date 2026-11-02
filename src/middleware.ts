import { defineMiddleware } from "astro:middleware";
import { maintenanceMode } from "./data/maintenance";

const ASSET_PREFIX = /^\/(_astro|images)\//;
const ASSET_EXT =
	/\.(css|js|mjs|map|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|txt|xml|json|webmanifest)$/i;

function isAsset(pathname: string) {
	return ASSET_PREFIX.test(pathname) || ASSET_EXT.test(pathname);
}

function withMaintenanceStatus(response: Response) {
	const headers = new Headers(response.headers);
	headers.set("Retry-After", "86400");
	headers.set("Cache-Control", "no-store");
	return new Response(response.body, { status: 503, headers });
}

export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname } = context.url;

	if (!maintenanceMode) {
		if (pathname === "/maintenance") {
			return context.redirect("/", 302);
		}
		return next();
	}

	if (isAsset(pathname)) {
		return next();
	}

	const response = pathname === "/maintenance" ? await next() : await next("/maintenance");
	return withMaintenanceStatus(response);
});
