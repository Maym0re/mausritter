// lib/hexagon.ts
import { Hexbin }    from 'd3-hexbin'
import { hexbin as makeHexbin } from 'd3-hexbin'
import type { Hex } from './hex'   // ваш интерфейс { x, y, q, r }

export function createHexagonGrid(
	radiusPx: number,   // радиус одного шестиугольника в пикселях
	mapRadius: number,  // количество «колец» вокруг центра, у вас mapRadius = 2
): Hex[] {
	// 1) Генерируем аксиальные координаты (q, r)
	const coords: { q: number; r: number }[] = [];
	for (let q = -mapRadius; q <= mapRadius; q++) {
		const r1 = Math.max(-mapRadius, -q - mapRadius);
		const r2 = Math.min( mapRadius, -q + mapRadius);
		for (let r = r1; r <= r2; r++) {
			coords.push({ q, r });
		}
	}

	// 2) Переводим (q,r) → пиксели (x,y)
	//    Формулы для «точечной» ориентации pointy-top:
	//    x = sqrt(3) * radiusPx * (q + r/2)
	//    y = 3/2 * radiusPx * r
	const sqrt3 = Math.sqrt(3);
	const points: [number,number][] = coords.map(({ q, r }) => ([
		sqrt3 * radiusPx * (q + r/2),
		1.5   * radiusPx * r,
	]));

	// 3) Привязываем d3-hexbin только ради удобного метода hexagon()
	const hexer: Hexbin<[number,number]> = makeHexbin()
		.radius(radiusPx)
		.x(d => d[0])
		.y(d => d[1]);

	return hexer(points).map(cell => ({
		x: cell.x,
		y: cell.y,
		q: Math.round((cell[0][0] - cell.x) / radiusPx),
		r: Math.round((cell[0][1] - cell.y) / radiusPx),
	}));
}

export function createExample(radiusPx: number, mapRadius: number): Hex[] {
	const hexer: Hexbin<[number,number]> = makeHexbin()
		.radius(radiusPx)
		.x(d => d[0])
		.y(d => d[1]);

	const points: [number, number][] = [
		[0, 0],
		[1, 0],
	]

	return [];
}