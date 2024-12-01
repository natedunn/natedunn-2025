// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import db from "@astrojs/db";
import { envField } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	env: {
		schema: {
			SITE_URL: envField.string({
				context: "client",
				access: "public",
				default: "http://localhost:4321",
			}),
		},
	},
	site: import.meta.env.SITE_URL ?? "http://localhost:4321",
	output: "server",
	adapter: vercel({
		imageService: true,
		devImageService: "sharp",
	}),
	image: {
		domains: [
			"nate.space",
			"natedunn.net",
			"utfs.io",
			...(import.meta.env.DEV ? ["localhost:4321", "utfs.io"] : []),
		],
	},
	integrations: [
		tailwind({
			configFile: "./tailwind.config.ts",
			applyBaseStyles: false,
		}),
		svelte(),
		db(),
	],
});
