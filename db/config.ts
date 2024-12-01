import { defineDb, defineTable, column, sql } from "astro:db";

const Project = defineTable({
	columns: {
		id: column.number({
			primaryKey: true,
			autoIncrement: true,
		}),
		name: column.text(),
		image: column.text(),
		tech: column.text(),
		description: column.text(),
		externalUrl: column.text({
			optional: true,
		}),
		internalUrl: column.text({
			optional: true,
		}),
		githubUrl: column.text({
			optional: true,
		}),
		status: column.text(),
	},
});

const Menu = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		text: column.text(),
		url: column.text(),
		parentId: column.number({
			optional: true,
		}),
		location: column.text(),
		order: column.number(),
	},
});

const About = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		bio: column.text(),
		image: column.text(),
	},
});

const Social = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		text: column.text(),
		url: column.text(),
		logo: column.text(),
		username: column.text({
			optional: true,
		}),
		tags: column.text({
			optional: true,
		}),
	},
});

export default defineDb({
	tables: {
		About,
		Project,
		Menu,
		Social,
	},
});
