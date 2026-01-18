import { defineTable, column, defineDb } from 'astro:db';

const Categories = defineTable({
	columns: {
		id: column.number({primaryKey: true}),
		label: column.text({unique: true})
	}
});

const Products = defineTable({
	columns: {
		id: column.number({primaryKey: true}),
		name: column.text(),
		price: column.number(),
		category: column.number({references: ()=> Categories.columns.id}),
		others: column.json()
	}
});

// https://astro.build/db/config
export default defineDb({
  tables: {Categories, Products}
});
