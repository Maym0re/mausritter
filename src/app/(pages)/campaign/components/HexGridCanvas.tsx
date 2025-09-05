'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Group, Layer, RegularPolygon, Stage, Text, Image as KonvaImage } from "react-konva";
import { defineHex, Orientation } from "honeycomb-grid";
import { HexData, MapState } from "@/types/map";
import {
	generateSettlement,
	getNeighborCoords,
	getRandomHexType,
	getRandomLandmark,
	getRandomLandmarkDetail,
	hexKey
} from "@/lib/mapUtils";
import useImage from 'use-image';
import { HexWindow } from './HexWindow';
import { CanvasImagesLayer, CanvasImagesLayerHandle } from './CanvasImagesLayer';
import { useToast } from '@/components/ui/ToastProvider';
import type Konva from 'konva';

interface HexGridCanvasProps {
	mode: 'master' | 'player';
	campaignId: string;
	isAddHexMode?: boolean;
	onAddHexModeChange?: (v: boolean) => void;
}

interface MapData {
	id: string | null;
	campaignId: string;
	size: number;
	centerX: number;
	centerY: number;
	cells: ApiCell[];
	images?: { id: string; data: string; x: number; y: number; width: number; height: number }[];
}

interface ApiCell {
	q: number;
	r: number;
	s: number;
	hexType: HexData['hexType'];
	landmark?: HexData['landmark'];
	landmarkDetail?: HexData['landmarkDetail'];
	settlement?: HexData['settlement'];
	isRevealed?: boolean;
	notes?: string;
	customName?: string;
	masterNotes?: string;
}

export function HexGridCanvas({mode, campaignId, isAddHexMode = false, onAddHexModeChange}: HexGridCanvasProps) {
	const [scale, setScale] = useState(1);
	const [pos, setPos] = useState({x: 400, y: 300});
	const [mapState, setMapState] = useState<MapState>({hexes: new Map(), selectedHex: null, mode});
	const [editingHex, setEditingHex] = useState<string | null>(null);
	const [hoveredHex, setHoveredHex] = useState<string | null>(null);
	const [mapData, setMapData] = useState<MapData | null>(null);
	const [loading, setLoading] = useState(true);
	const [canvasSize, setCanvasSize] = useState({width: 1000, height: 700});
	const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

	// Загрузка изображений фонов (один слой на гекс)
	const [imgCountryside] = useImage('/images/hexes/hex-vilage.webp');
	const [imgForest] = useImage('/images/hexes/hex-forest.webp');
	const [imgRiver] = useImage('/images/hexes/hex-river.webp');
	const [imgCity] = useImage('/images/hexes/hex-city.webp');
	const [imgBlank] = useImage('/images/hexes/hex-blank.webp');

	const radius = 35;

	const stageRef = useRef<Konva.Stage | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const imagesLayerRef = useRef<CanvasImagesLayerHandle | null>(null);
	const toast = useToast();

	// После всех предыдущих хуков, чтобы порядок оставался стабильным при хот-релоаде
	const HEX_HEIGHT = useMemo(()=> Math.sqrt(3) * radius, [radius]);

	const loadMapData = useCallback(async () => {
		try {
			setLoading(true);
			const r = await fetch(`/api/maps?campaignId=${campaignId}`);
			if (r.ok) {
				const data: MapData = await r.json();
				setMapData(data);
				const m = new Map<string, HexData>();
				data.cells?.forEach((cell: ApiCell) => {
					const k = hexKey(cell.q, cell.r);
					m.set(k, {
						q: cell.q,
						r: cell.r,
						s: cell.s,
						hexType: cell.hexType,
						landmark: cell.landmark,
						landmarkDetail: cell.landmarkDetail,
						settlement: cell.settlement,
						isRevealed: mode === 'master' ? true : !!cell.isRevealed,
						notes: cell.notes || '',
						customName: cell.customName,
						masterNotes: cell.masterNotes || ''
					});
				});
				setMapState(p => ({...p, hexes: m}));
			}
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	}, [campaignId, mode]);

	const loadHexTypes = useCallback(async () => {
		try {
			const r = await fetch('/api/maps/types');
			if (r.ok) {
				await r.json();
			}
		} catch (e) {
			console.error(e);
		}
	}, []);

	// Теперь эффект после объявлений
	useEffect(() => {
		if (campaignId) {
			loadMapData();
			loadHexTypes();
		}
	}, [campaignId, loadMapData, loadHexTypes]);

	// resize
	useEffect(() => {
		const upd = () => {
			const w = window.innerWidth;
			const h = window.innerHeight;
			const header = 74; // актуальная высота верхней панели
			const avail = h - header;
			setCanvasSize({width: w, height: Math.max(avail, 400)});
			setPos({x: w / 2, y: Math.max(avail, 400) / 2});
		};
		upd();
		window.addEventListener('resize', upd);
		return () => window.removeEventListener('resize', upd);
	}, []);

	// grid
	const {Tile} = useMemo(() => {
		const Tile = defineHex({
			dimensions: radius,
			orientation: Orientation.FLAT
		});
		return {Tile};
	}, [radius]);

	// update cell
	const updateHexCell = async (k: string, updates: Partial<HexData>) => {
		if (!mapData?.id) return;
		const hex = mapState.hexes.get(k);
		if (!hex) return;
		try {
			const r = await fetch('/api/maps/cells', {
				method: 'PUT',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					hexMapId: mapData.id,
					q: hex.q,
					r: hex.r,
					s: hex.s,
					hexTypeId: updates.hexType?.id || hex.hexType?.id,
					landmarkId: updates.landmark?.id || hex.landmark?.id,
					landmarkDetailId: updates.landmarkDetail?.id || hex.landmarkDetail?.id,
					settlementId: updates.settlement?.id || hex.settlement?.id,
					isRevealed: updates.isRevealed ?? hex.isRevealed,
					notes: updates.notes ?? hex.notes,
					customName: updates.customName ?? hex.customName,
					...(mode === 'master' ? {masterNotes: updates.masterNotes ?? hex.masterNotes} : {})
				})
			});
			if (!r.ok) console.error('Failed update hex');
		} catch (e) {
			console.error(e);
		}
	};

	const handleHexClick = useCallback(async (k: string) => {
		const hex = mapState.hexes.get(k);
		if (mode === 'master' && hex) {
			// toggle reveal on right-click maybe later; for now just open window
		}
		setEditingHex(k);
		setMapState(p => ({...p, selectedHex: k}));
	}, [mode, mapState.hexes]);

	const handleHexSave = useCallback(async (k: string, data: Partial<HexData>) => {
		setMapState(p => {
			const nh = new Map(p.hexes);
			const ex = nh.get(k);
			if (ex) nh.set(k, {...ex, ...data});
			return {...p, hexes: nh};
		});
		await updateHexCell(k, data);
		// оставляем окно открытым для последовательного редактирования
	}, [updateHexCell]);

	// Удаление гекса (перенесено выше ранних return)
	const handleHexDelete = useCallback(async (k: string) => {
		if (!mapData?.id) return;
		const hex = mapState.hexes.get(k);
		if (!hex) return;
		setMapState(p => {
			const nh = new Map(p.hexes);
			nh.delete(k);
			return {...p, hexes: nh, selectedHex: p.selectedHex === k ? null : p.selectedHex};
		});
		setEditingHex(null);
		try {
			await fetch('/api/maps/cells', {
				method: 'DELETE',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({hexMapId: mapData.id, q: hex.q, r: hex.r, s: hex.s})
			});
		} catch (e) {
			console.error('Failed delete hex', e);
		}
	}, [mapData?.id, mapState.hexes]);

	// Создание одного нового гекса по координатам (примыкающего)
	const createHexAt = useCallback(async (q: number, r: number) => {
		if (!mapData?.id) return;
		const key = hexKey(q, r);
		if (mapState.hexes.has(key)) return;
		const ht = getRandomHexType();
		const lm = getRandomLandmark(ht.id);
		const ld = getRandomLandmarkDetail();
		setMapState(p => {
			const nh = new Map(p.hexes);
			nh.set(key, {
				q,
				r,
				s: -(q + r),
				hexType: ht,
				landmark: lm,
				landmarkDetail: ld,
				settlement: Math.random() < 0.2 ? generateSettlement() : undefined,
				isRevealed: mode === 'master',
				notes: ''
			});
			return {...p, hexes: nh, selectedHex: key};
		});
		onAddHexModeChange?.(false);
		setEditingHex(key);
		try {
			await fetch('/api/maps/cells', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({hexMapId: mapData.id, q, r, s: -(q + r), hexTypeId: ht.id})
			});
		} catch (e) {
			console.error(e);
		}
	}, [mapData?.id, mapState.hexes, mode, onAddHexModeChange]);

	// Потенциальные координаты для добавления (граница)
	const potentialHexes = useMemo(() => {
		if (!isAddHexMode) return [] as { q: number; r: number }[];
		const occupied = mapState.hexes;
		const border = new Map<string, { q: number; r: number; count: number }>();
		occupied.forEach(h => {
			getNeighborCoords(h.q, h.r).forEach(n => {
				const k = hexKey(n.q, n.r);
				if (!occupied.has(k)) {
					const prev = border.get(k) || {q: n.q, r: n.r, count: 0};
					prev.count += 1;
					border.set(k, prev);
				}
			});
		});
		// Можно фильтровать по count>=1 (у нас всегда так) — оставляем всё
		return Array.from(border.values()).map(v => ({q: v.q, r: v.r}));
	}, [isAddHexMode, mapState.hexes]);

	// Отображение загрузки
	if (loading) {
		return (
			<div className="flex items-center justify-center h-full">
				<div className="text-center">
					<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-900"></div>
					<p className="mt-4 text-amber-900">Загрузка карты...</p>
				</div>
			</div>
		);
	}

	// Если карты нет и это не мастер
	if (!mapData?.id && mode === 'player') {
		return (
			<div className="flex items-center justify-center h-full">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Карта не создана</h2>
					<p className="text-gray-600">Мас��ер еще не создал карту для этой кампании.</p>
				</div>
			</div>
		);
	}

	// Если карты нет и это мастер
	if (!mapData?.id && mode === 'master') {
		return (
			<div className="flex items-center justify-center h-full">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Создайте карту</h2>
					<p className="text-gray-600 mb-6">Для начала создайте карту для вашей кампании.</p>
					<button
						onClick={() => window.location.reload()}
						className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
					>
						Обновить страницу
					</button>
				</div>
			</div>
		);
	}

	const getHexColor = (hex: HexData) => hex.hexType.color;
	const getHexStroke = (k: string, hex: HexData) => mapState.selectedHex === k ? '#000' : (hoveredHex === k ? '#333' : '#000');
	const renderHexLabel = (hex: HexData, x: number, y: number) => {
		const label = hex.customName || hex.settlement?.name || hex.landmark?.name || hex.hexType.name;
		return <Text x={x - label.length * 3} y={y + 20} text={label} fontSize={9} fill="#000" fontFamily="serif" fontStyle="bold"/>;
	};

	const getHexImage = (hex: HexData) => {
		switch (hex.hexType.id) {
			case 'countryside': return imgCountryside;
			case 'forest': return imgForest;
			case 'river': return imgRiver;
			case 'human_town': return imgCity;
			case 'mountains': return imgForest; // временный выбор
			case 'swamp': return imgCountryside; // временный выбор
			default: return imgBlank;
		}
	};

	// Рендер одного изображения внутри гекса с клипом
	const renderHexImage = (img: HTMLImageElement | undefined, x: number, y: number) => {
		if (!img) return null;
		return (
			<Group x={x} y={y} listening={false}
			       clipFunc={(ctx) => {
			       	const h = HEX_HEIGHT;
			       	ctx.beginPath();
			       	ctx.moveTo(-radius/2, -h/2);
			       	ctx.lineTo(radius/2, -h/2);
			       	ctx.lineTo(radius, 0);
			       	ctx.lineTo(radius/2, h/2);
			       	ctx.lineTo(-radius/2, h/2);
			       	ctx.lineTo(-radius, 0);
			       	ctx.closePath();
			       }}>
				<KonvaImage image={img} x={-radius} y={-HEX_HEIGHT/2} width={radius*2} height={HEX_HEIGHT} listening={false}/>
			</Group>
		);
	};

	return (
		<div className="flex flex-col h-full" ref={containerRef}>
			<div className="flex flex-1">
				<div className="flex-1 bg-gray-50">
					<Stage ref={stageRef} width={canvasSize.width} height={canvasSize.height} draggable scaleX={scale}
					       scaleY={scale} x={pos.x} y={pos.y}
					       onWheel={(e) => {
						       e.evt.preventDefault();
						       if (e.evt.ctrlKey) {
							       const stage = e.target.getStage();
							       if (!stage) return;
							       const old = stage.scaleX();
							       const ptr = stage.getPointerPosition();
							       if (!ptr) return;
							       const mp = {x: (ptr.x - stage.x()) / old, y: (ptr.y - stage.y()) / old};
							       const ns = e.evt.deltaY < 0 ? old * 1.1 : old / 1.1;
							       const clamped = Math.max(0.5, Math.min(3, ns));
							       setScale(clamped);
							       setPos({x: ptr.x - mp.x * clamped, y: ptr.y - mp.y * clamped});
						       } else {
							       setPos(p => ({x: p.x - e.evt.deltaX, y: p.y - e.evt.deltaY}));
						       }
					       }} onMouseDown={(e) => {
						if (e.target === e.target.getStage() && selectedImageId) {
							setSelectedImageId(null);
						}
					}} onTouchStart={(e) => {
						if (e.target === e.target.getStage() && selectedImageId) {
							setSelectedImageId(null);
						}
					}}>
						<Layer>
							{Array.from(mapState.hexes.entries()).map(([key, hex]) => {
								const h = new Tile({q: hex.q, r: hex.r});
								const x = h.x;
								const y = h.y;
								const img = getHexImage(hex);
								return (
									<Group key={key}>
										{renderHexImage(img, x, y)}
										<RegularPolygon
											x={x}
											y={y}
											sides={6}
											rotation={30}
											radius={radius}
											fillEnabled={false}
											stroke={getHexStroke(key, hex)}
											strokeWidth={mapState.selectedHex === key ? 3 : 1}
											onClick={() => handleHexClick(key)}
											onMouseEnter={() => setHoveredHex(key)}
											onMouseLeave={() => setHoveredHex(null)}
											shadowBlur={mapState.selectedHex === key ? 10 : 0}
											shadowColor="gold"/>
										{renderHexLabel(hex, x, y)}
									</Group>
								);
							})}
							{isAddHexMode && potentialHexes.map(ph => {
								const temp = new Tile({ q: ph.q, r: ph.r });
								const x = temp.x; const y = temp.y;
								const k = hexKey(ph.q, ph.r);
								return (
									<Group
										key={`potential-${k}`}
										onClick={() => createHexAt(ph.q, ph.r)}
										onMouseEnter={() => setHoveredHex(k)}
										onMouseLeave={() => setHoveredHex(null)}
									>
										{renderHexImage(imgBlank, x, y)}
										<RegularPolygon
											x={x}
											y={y}
											sides={6}
											rotation={30}
											radius={radius}
											fillEnabled={false}
											stroke={'#888'}
											dash={[4,4]}
											strokeWidth={2}
										/>
									</Group>
								);
							})}
						</Layer>
						<CanvasImagesLayer
							ref={imagesLayerRef}
							maxTotalMB={1}
							stageRef={stageRef}
							containerRef={containerRef}
							editable={mode === 'master'}
							onSelectionChange={setSelectedImageId}
							onStorageLimit={(current, limit) => {
								toast.error(`Лимит изображений исчерпан. ${(current / 1024).toFixed(1)} / ${(limit / 1024).toFixed(1)} КБ.`);
							}}
							hexMapId={mapData?.id || undefined}
							initialImages={mapData?.images || []}
						/>
					</Stage>
				</div>
			</div>
			{editingHex &&
          <HexWindow mode={mode} hex={mapState.hexes.get(editingHex)!} onSave={(d) => handleHexSave(editingHex, d)}
                     onDelete={mode === 'master' ? () => handleHexDelete(editingHex) : undefined}
                     onClose={() => setEditingHex(null)}/>}
		</div>
	);
}
