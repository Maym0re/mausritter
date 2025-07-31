// lib/hex.ts
import { hexbin as makeHexbin, Hexbin } from 'd3-hexbin';

export interface Hex {
	x: number;
	y: number;
	q: number;
	r: number;
}

export function createHexGrid(
	width: number,
	height: number,
	radius: number
): Hex[] {
	const hexbin: Hexbin<[number, number]> = makeHexbin()
		.radius(radius)
		.x(d => d[0])
		.y(d => d[1]);

	const points: [number, number][] = [];
	const dx = Math.sqrt(3) * radius;
	const dy = 1.5 * radius;
	let row = 0;

	for (let y = radius; y < height + radius; y += dy, ++row) {
		for (let x = radius; x < width + radius; x += dx) {
			const xOffset = row % 2 ? dx / 2 : 0;
			points.push([x + xOffset, y]);
		}
	}

	return hexbin(points).map(cell => ({
		x: cell.x,
		y: cell.y,
		q: 0,
		r: 0,
	}));
}