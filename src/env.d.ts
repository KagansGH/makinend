type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {
		/** Bakım modunda /main ile açılan önizleme (veya bakım kapalı). */
		siteUnlocked: boolean;
	}
}
