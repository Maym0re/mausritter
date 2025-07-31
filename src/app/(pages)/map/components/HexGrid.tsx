'use client';

import { useRef, useEffect } from 'react';
import { createHexGrid, Hex } from '@/lib/hex';
import { select } from "d3-selection";
import { zoom } from 'd3-zoom';
import { hexbin } from "d3-hexbin";
import { createExample, createHexagonGrid } from "@/lib/hexagon";

interface HexGridProps {
	width: number;
	height: number;
	radius: number;
}

export function HexGrid({ width, height, radius }: HexGridProps) {
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		if (!svgRef.current) return;

		// Очищаем старое
		select(svgRef.current).selectAll('*').remove();

		// Создаём SVG
		const svg =
			select(svgRef.current)
			.attr('viewBox', `0 0 ${width} ${height}`);

		// Генерируем сетку
		// const hexes: Hex[] = createHexGrid(width, height, radius);
		const hexes: Hex[] = createHexagonGrid( radius, 2 );
		// const hexes: Hex[] = createExample( radius, 2 );

		// Группа для шестиугольников
		const g = svg.append('g');

		// Рисуем каждый шестиугольник
		const hexpath =
			hexbin()
			.radius(radius)
			.hexagon();

		g.selectAll('path')
			.data(hexes)
			.enter()
			.append('path')
			.attr('d', hexpath)
			.attr('transform', (d) => `translate(${d.x},${d.y})`)
			.attr('stroke', '#333')
			.attr('fill', '#ddd')
			.on('click', (event, d) => {
				console.log('Clicked hex at', d.x, d.y);
			});

		g.selectAll('text')
			.data(hexes)
			.enter()
			.append('text')
			.attr('x', d => d.x)
			.attr('y', d => d.y + 5)    // чуть опустим вниз для центрирования
			.attr('text-anchor', 'middle')
			.text((_, i) => String(i+1))

		// Зум и пан
		svg.call(
			zoom<SVGSVGElement, unknown>()
				.scaleExtent([0.5, 4])
				.on('zoom', ({ transform }) => {
					g.attr('transform', transform.toString());
				})
		);
	}, [width, height, radius]);

	return (
		<svg
			ref={svgRef}
			style={{ width: '100%', height: '100%', background: '#fafafa' }}
		/>
	);
}