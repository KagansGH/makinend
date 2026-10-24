// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://makinend.com",
	trailingSlash: "never",
	integrations: [],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
