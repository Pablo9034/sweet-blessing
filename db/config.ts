import { defineTable, column, defineDb } from 'astro:db';

const Categories = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		label: column.text({ unique: true })
	}
});

// https://astro.build/db/config
export default defineDb({
  tables: {Categories}
});
