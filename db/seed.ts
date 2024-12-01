import { db, Project, Menu } from "astro:db";

//
// Projects
const insertProjects = async () => {
	await db.delete(Project).all();
	await db.insert(Project).values([
		{
			name: "Rad",
			image: "https://natedunn.net/projects/rad/rad-bg-light.webp",
			tech: JSON.stringify([
				"React",
				"Next.js",
				"TypeScript",
				"Tailwind",
				"Postgres",
				"Drizzle",
			]),
			description:
				"An exploration of lists and how they can be made more fun, engaging, and sharable.",
			externalUrl: "https://superrad.app",
			status: JSON.stringify(["live"]),
		},
		{
			name: "Kino",
			image:
				"https://utfs.io/f/9a90b28e-b6e8-497b-aef1-3340f190d90c-kdqex6.jpeg",
			tech: JSON.stringify([
				"React",
				"Next.js",
				"TypeScript",
				"Tailwind",
				"Postgres",
				"Drizzle",
			]),
			description: "The ideal way to get feedback on your projects",
			externalUrl: "https://usekino.com",
			status: JSON.stringify(["live"]),
		},
		{
			name: "Sportsball",
			image:
				"https://utfs.io/f/9a90b28e-b6e8-497b-aef1-3340f190d90c-kdqex6.jpeg",
			tech: JSON.stringify([
				"Svelte",
				"SvelteKit",
				"TypeScript",
				"Tailwind",
				"Postgres",
			]),
			description:
				"The cleanest way to follow your favorite sports leagues, teams, and players.",
			externalUrl: "https://sportsball.live",
			githubUrl: "https://github.com/natedunn/sportsball",
			status: JSON.stringify(["live"]),
		},
		{
			name: "Proper",
			image:
				"https://utfs.io/f/9a90b28e-b6e8-497b-aef1-3340f190d90c-kdqex6.jpeg",
			tech: JSON.stringify(["Solid.js", "Solid Start", "Tailwind"]),
			description:
				"Generate your own shell script to globally install from NPM, Homebrew, Mac app store, & Composer.",
			externalUrl: "https://proper.sh",
			githubUrl: "https://github.com/natedunn/proper-builder",
			status: JSON.stringify(["live"]),
		},
	]);
};

//
// Menus
const insertMenus = async () => {
	await db.delete(Menu).all();
	await db.insert(Menu).values([
		{
			id: 1,
			text: "Social",
			url: "/social",
			parentId: null,
			location: "main",
			order: 1,
		},
		{
			id: 2,
			text: "About",
			url: "/about",
			parentId: null,
			location: "main",
			order: 2,
		},
		{
			id: 3,
			text: "Projects",
			url: "/projects",
			parentId: null,
			location: "main",
			order: 3,
		},
	]);
};

export default async function seed() {
	await Promise.all([insertProjects(), insertMenus()]);
}
