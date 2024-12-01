import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

const maxWidth = "62rem";

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": maxWidth,
				xl: maxWidth,
				lg: maxWidth,
				md: maxWidth,
				sm: maxWidth,
				xs: maxWidth,
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
				standard: "#0057FF",
				noir: "#181818",
				cloud: "#f0f5ff",
				mint: "#99FFE4",
				peach: "#FFC799",
				malva: "#FCADFF",
			},
			borderRadius: {
				xl: "calc(var(--radius) + 4px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: [...fontFamily.sans],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--bits-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--bits-accordion-content-height)" },
					to: { height: "0" },
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"caret-blink": "caret-blink 1.25s ease-out infinite",
			},
		},
	},
	plugins: [
		plugin(function ({
			addVariant,
		}: {
			addVariant: (name: string, variants: string[]) => void;
		}) {
			addVariant("hocus", ["&:hover", "&:focus"]);
			addVariant("group-hocus", [
				":merge(.group):hover &",
				":merge(.group):focus &",
			]);
			addVariant("factive", ["&:active", "&:focus"]);
			addVariant("all", ["&:active", "&:focus", "&:hover"]);
			addVariant("list", [".list-primary &"]);
			addVariant("light", ["html.light &"]);
		}),
		tailwindcssAnimate,
	],
};

export default config;
