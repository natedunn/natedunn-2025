import { db, Project, Menu } from "astro:db";

//
// Projects
const insertProjects = async () => {
	await db.delete(Project).all();
	await db.insert(Project).values([
		{
			name: "Rad",
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
		},
		{
			name: "Kino",
			image:
				"https://utfs.io/f/9a90b28e-b6e8-497b-aef1-3340f190d90c-kdqex6.jpeg",
			tech: JSON.stringify(["Solid.js", "Solid Start", "Tailwind"]),
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
		},
		{
			name: "Proper",
			image:
				"https://utfs.io/f/9a90b28e-b6e8-497b-aef1-3340f190d90c-kdqex6.jpeg",
			tech: JSON.stringify(["Solid.js", "Solid Start", "Tailwind"]),
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
