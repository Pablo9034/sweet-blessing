import { db, Categories } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Categories).values([
		{ id: 1, label: 'redondos' },
		{ id: 2, label: '2 pisos' },
		{ id: 3, label: 'cuadrados' },
		{ id: 4, label: '3 leches' },
		{ id: 5, label: 'Bufet' }
	]);
}
