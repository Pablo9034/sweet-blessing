import { db, Categories, Products } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Categories).values([
		{id: 1, label: 'redondos'},
		{id: 2, label: '2 pisos'},
		{id: 3, label: 'cuadrados'},
		{id: 4, label: '3 leches'},
		{id: 5, label: 'Bufet'}
	]);

	const filling = ['coco', 'mani', 'crema de chocolate', 'crema de mantequilla'];

	await db.insert(Products).values([
		// rounded cakes
		{
			id: 1,
			name: 'Mini Cake',
			price: 3_500,
			category: 1,
			others: JSON.stringify({
				size: {label: '18x10', height: 18, width: 10},
				serves: '8',
				filling,
				additions: [
					{label: 'Almibar de leche condensada', price: 600},
					{label: 'Relleno de apollo de tiramisú (150gr)', price: 700},
					{label: 'Relleno de apollo de frambuesa (150gr)', price: 700},
					{label: 'Relleno de natilla', price: 500},
					{label: 'Merengue, masa, cobertura y relleno de chocolate', price: 1_000},
					{label: 'Almendras laminadas', price: 1_000}
				]
			})
		},
		{
			id: 2,
			name: 'SemiMini Cake',
			price: 4_500,
			category: 1,
			others: JSON.stringify({
				size: {label: '20x12', height: 20, width: 12},
				serves: '10-15',
				filling,
				additions: [
					{label: 'Relleno de apollo de tiramisú (200gr)', price: 1_000},
					{label: 'Relleno de apollo de frambuesa (200gr)', price: 1_000},
					{label: 'Merengue, masa, cobertura y relleno de chocolate', price: 1_000},
					{label: 'Almendras laminadas', price: 1_000}
				]
			})
		},
		{
			id: 3,
			name: 'Cake',
			price: 5_500,
			category: 1,
			others: JSON.stringify({
				size: {label: '22x12', height: 22, width: 12},
				serves: '15-20',
				filling,
				additions: [
					{label: 'Almibar de leche condensada', price: 1_000},
					{label: 'Relleno de apollo de tiramisú (200gr)', price: 1_500},
					{label: 'Relleno de apollo de frambuesa (200gr)', price: 1_500},
					{label: 'Relleno de natilla', price: 700},
					{label: 'Merengue, masa, cobertura y relleno de chocolate', price: 1_500},
					{label: 'Almendras laminadas', price: 1_000}
				]
			})
		},
		{
			id: 4,
			name: 'Super Cake',
			price: 7_500,
			category: 1,
			others: JSON.stringify({
				size: {label: '27x13', height: 27, width: 13},
				serves: '25-30',
				filling,
				additions: [
					{label: 'Almibar de leche condensada', price: 1_000},
					{label: 'Relleno de apollo de tiramisú (200gr)', price: 1_500},
					{label: 'Relleno de apollo de frambuesa (200gr)', price: 1_500},
					{label: 'Relleno de natilla', price: 700},
					{label: 'Merengue, masa, cobertura y relleno de chocolate', price: 1_500},
					{label: 'Almendras laminadas', price: 1_500}
				]
			})
		},
		// two floors cakes
		{
			id: 5,
			name: 'Doble Cake',
			price: 12_000,
			category: 2,
			others: JSON.stringify({
				size: {label: ['25x10', '17x10'], height: [25, 17], width: [10, 10]},
				serves: '32-38',
				filling,
				additions: [
					{label: 'Almibar de leche condensada', price: 1_000},
					{label: 'Relleno de apollo de tiramisú (200gr)', price: 1_500},
					{label: 'Relleno de apollo de frambuesa (200gr)', price: 1_500},
					{label: 'Relleno de natilla', price: 700},
					{label: 'Merengue, masa, cobertura y relleno de chocolate', price: 1_500},
					{label: 'Almendras laminadas', price: 1_500}
				]
			})
		},
		{
			id: 6,
			name: 'Doble+ Cake',
			price: 15_000,
			category: 2,
			others: JSON.stringify({
				size: {label: ['30x12', '17x12'], height: [30, 17], width: [12, 12]},
				serves: '37-43',
				filling,
				additions: [
					{label: 'Almibar de leche condensada', price: 1_000},
					{label: 'Relleno de apollo de tiramisú (200gr)', price: 1_500},
					{label: 'Relleno de apollo de frambuesa (200gr)', price: 1_500},
					{label: 'Relleno de natilla', price: 700},
					{label: 'Merengue, masa, cobertura y relleno de chocolate', price: 1_500},
					{label: 'Almendras laminadas', price: 1_500}
				]
			})
		},
		// squares cakes
		{
			id: 7,
			name: 'Cake Bandeja',
			price: 15_000,
			category: 3,
			others: JSON.stringify({
				size: {label: '35x12', height: 35, width: 12},
				serves: '40',
				filling,
				additions: [
					{label: 'Almibar de leche condensada', price: 1_000},
					{label: 'Relleno de apollo de tiramisú (200gr)', price: 1_500},
					{label: 'Relleno de apollo de frambuesa (200gr)', price: 1_500},
					{label: 'Relleno de natilla', price: 700},
					{label: 'Merengue, masa, cobertura y relleno de chocolate', price: 1_500},
					{label: 'Almendras laminadas', price: 1_500}
				]
			})
		},
		{
			id: 8,
			name: 'Cake Cuadrado',
			price: 12_000,
			category: 3,
			others: JSON.stringify({
				size: {label: '30x12', height: 35, width: 12},
				serves: '30',
				filling,
				additions: [
					{label: 'Almibar de leche condensada', price: 1_000},
					{label: 'Relleno de apollo de tiramisú (200gr)', price: 1_500},
					{label: 'Relleno de apollo de frambuesa (200gr)', price: 1_500},
					{label: 'Relleno de natilla', price: 700},
					{label: 'Merengue, masa, cobertura y relleno de chocolate', price: 1_500},
					{label: 'Almendras laminadas', price: 1_500}
				]
			})
		}
	]);
}