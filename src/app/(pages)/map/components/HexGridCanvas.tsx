'use client';
import React, { useState } from "react";
import { Stage, Layer, Group, RegularPolygon, Text } from "react-konva";
import { defineHex, Grid, Hex, Orientation, spiral } from "honeycomb-grid";

export function HexGridCanvas() {
	const [scale, setScale] = useState(1);
	const [pos, setPos] = useState({ x: 0, y: 0 });

	const radius = 40;
	const mapRadius = 2;
	const canvasWidth = 800;
	const canvasHeight = 600;

// 1) Define a flat-top hexagon factory with a size (dimension) of radius px
	const Tile = defineHex({
		dimensions: radius,
		orientation: Orientation.FLAT,
	});

// 2) Build a hexagon-shaped grid (radius = mapRadius => 19 hexes)
	const grid = new Grid(Tile, spiral({ radius: mapRadius }));

// Export the grid cells and a Layout for pixel conversion
	const hexes: Grid<Hex> = grid;

	// Пример: задёргиваем одну картинку для всех ячеек
	// const [img] = useImage("/path/to/texture.png");

	return (
		<Stage
			width={canvasWidth}
			height={canvasHeight}

			draggable
			scaleX={scale}
			scaleY={scale}
			x={pos.x}
			y={pos.y}
			onWheel={e => {
				e.evt.preventDefault();
				const delta = e.evt.deltaY > 0 ? 0.98 : 1.05;
				setScale(prev => prev * delta);
			}}
		>
			<Layer>
				{hexes.toArray().map((hex, i) => {
					const x = hex.x + canvasWidth / 2;
					const y = hex.y + canvasHeight / 2;
					return (
						<Group key={i} x={x} y={y}>
							{/* фон-шестиугольник */}
							<RegularPolygon
								sides={6}
								radius={radius}
								rotation={30}
								fill={'#fff'}
								fillPatternScaleX={1}
								fillPatternScaleY={1}
								stroke="#333"
								strokeWidth={1}
								onMouseEnter={e => {
									const group = e.target.getParent();
									group?.moveToTop();
									// group?.getLayer().batchDraw();
									e.target.to({
										scaleX: 1.1,
										scaleY: 1.1,
										duration: 0.2,
									});
								}}
								onMouseLeave={e => {
									e.target.to({
										scaleX: 1,
										scaleY: 1,
										duration: 0.2,
									});
								}}
								onClick={(e) => {
									// e.target.to({
									// 	scaleX: 3,
									// 	scaleY: 3,
									// 	duration: 0.3,
									// });
								}}
							></RegularPolygon>
							<Text
								text={`${i + 1}`}
								fontSize={radius * 0.6}
								width={radius * 2}
								height={radius * 2}
								align="center"
								verticalAlign="middle"
								offsetX={radius}
								offsetY={radius}
								fill="#333"
								listening={false}
							/>
						</Group>
					);
				})}
			</Layer>
		</Stage>
	);
}