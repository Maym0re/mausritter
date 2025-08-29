'use client';
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Stage, Layer, Group, RegularPolygon, Text, Circle } from "react-konva";
import { defineHex, Grid, Orientation, spiral } from "honeycomb-grid";
import { HexData, MapState } from "@/types/map";
import {
	hexKey,
	getRandomHexType,
	getRandomLandmark,
	getRandomLandmarkDetail,
	generateSettlement,
	getNeighborCoords
} from "@/lib/mapUtils";
import { getHexTypeIconUrl, getLandmarkIconUrl, iconDataUrls } from "@/lib/iconUtils";
import { HexIcon } from "@/components/HexIcon";
import { HexEditModal } from "./HexEditModal";
import { HexDetailsPanel } from "./HexDetailsPanel";
import { CanvasImagesLayer, CanvasImagesLayerHandle } from "./CanvasImagesLayer";

interface HexGridCanvasProps {
	mode: 'master' | 'player';
	campaignId: string;
}

interface MapData {
	id: string | null;
	campaignId: string;
	size: number;
	centerX: number;
	centerY: number;
	cells: any[];
}

export function HexGridCanvas({mode, campaignId}: HexGridCanvasProps) {
	const [scale, setScale] = useState(1);
	const [pos, setPos] = useState({x: 400, y: 300});
	const [mapState, setMapState] = useState<MapState>({hexes: new Map(), selectedHex: null, mode, isEditMode: false});
	const [editingHex, setEditingHex] = useState<string | null>(null);
	const [hoveredHex, setHoveredHex] = useState<string | null>(null);
	const [mapData, setMapData] = useState<MapData | null>(null);
	const [loading, setLoading] = useState(true);
	const [canvasSize, setCanvasSize] = useState({width: 1000, height: 700});
	const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
	const [isAddHexMode, setIsAddHexMode] = useState(false);

	const stageRef = useRef<import('konva').Stage | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const imagesLayerRef = useRef<CanvasImagesLayerHandle | null>(null);

	const radius = 35;
	const mapRadius = 2;

	// загрузка карты
	useEffect(() => {
		if (campaignId) {
			loadMapData();
			loadHexTypes();
		}
	}, [campaignId]);

	const loadMapData = async () => {
		try {
			setLoading(true);
			const r = await fetch(`/api/maps?campaignId=${campaignId}`);
			if (r.ok) {
				const data = await r.json();
				setMapData(data);

				const m = new Map<string, HexData>();
				data.cells?.forEach((cell: any) => {
					const k = hexKey(cell.q, cell.r);
					m.set(k, {
						q: cell.q,
						r: cell.r,
						s: cell.s,
						hexType: cell.hexType,
						landmark: cell.landmark,
						landmarkDetail: cell.landmarkDetail,
						settlement: cell.settlement,
						isRevealed: mode === 'master' ? true : cell.isRevealed,
						notes: cell.notes || '',
						customName: cell.customName
					});
				});
				setMapState(p => ({...p, hexes: m}));
			}
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};

	const loadHexTypes = async () => {
		try {
			const r = await fetch('/api/maps/types');
			if (r.ok) {
				await r.json();
			}
		} catch (e) {
			console.error(e);
		}
	};

	// resize
	useEffect(() => {
		const upd = () => {
			const w = window.innerWidth;
			const h = window.innerHeight;
			const header = 120;
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
					customName: updates.customName ?? hex.customName
				})
			});
			if (!r.ok) console.error('Failed update hex');
		} catch (e) {
			console.error(e);
		}
	};

	const handleHexClick = useCallback(async (k: string) => {
		if (mode === 'master') {
			if (mapState.isEditMode) {
				setEditingHex(k);
			} else {
				const hex = mapState.hexes.get(k);
				if (hex) {
					const newRev = !hex.isRevealed;
					setMapState(p => {
						const nh = new Map(p.hexes);
						nh.set(k, {...hex, isRevealed: newRev});
						return {...p, hexes: nh};
					});
					await updateHexCell(k, {isRevealed: newRev});
				}
			}
		}
		setMapState(p => ({...p, selectedHex: k}));
	}, [mode, mapState.isEditMode, mapState.hexes, mapData?.id]);

	const handleHexSave = useCallback(async (k: string, data: Partial<HexData>) => {
		setMapState(p => {
			const nh = new Map(p.hexes);
			const ex = nh.get(k);
			if (ex) nh.set(k, {...ex, ...data});
			return {...p, hexes: nh};
		});
		await updateHexCell(k, data);
		setEditingHex(null);
	}, [mapData?.id]);

	const addNewHexes = useCallback(async () => {
		if (!mapData?.id) return;
		setMapState(p => {
			const nh = new Map(p.hexes);
			const existing = Array.from(nh.keys()).map(key => {
				const [q, r] = key.split(',').map(Number);
				return {q, r};
			});
			const potentials = new Set<string>();
			existing.forEach(({q, r}) => {
				getNeighborCoords(q, r).forEach(({q: nq, r: nr}) => {
					const key = hexKey(nq, nr);
					if (!nh.has(key)) potentials.add(key);
				});
			});
			potentials.forEach(key => {
				const [q, r] = key.split(',').map(Number);
				const ht = getRandomHexType();
				const lm = getRandomLandmark(ht.id);
				const ld = getRandomLandmarkDetail();
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
				fetch('/api/maps/cells', {
					method: 'POST',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						hexMapId: mapData.id,
						q,
						r,
						s: -(q + r),
						hexTypeId: 'countryside'
					})
				}).catch(() => {
				});
			});
			return {...p, hexes: nh};
		});
	}, [mode, mapData?.id]);

	// Создание одного нового гекса по координатам (примыкающего)
	const createHexAt = useCallback(async (q: number, r: number) => {
    if (!mapData?.id) return;
    const key = hexKey(q, r);
    if (mapState.hexes.has(key)) return; // уже есть
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
      return { ...p, hexes: nh, selectedHex: key };
    });
    // Отключаем режим добавления чтобы убрать подсветку других потенциальных гексов
    setIsAddHexMode(false);
    // Открываем модалку редактирования сразу после создания
    setEditingHex(key);
    try {
      await fetch('/api/maps/cells', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hexMapId: mapData.id,
          q,
          r,
          s: -(q + r),
          hexTypeId: ht.id // сохраняем реальный тип вместо фиксированного
        })
      });
    } catch (e) {
      console.error('createHexAt error', e);
    }
  }, [mapData?.id, mapState.hexes, mode]);

	// Потенциальные координаты для добавления (граница)
	const potentialHexes = useMemo(() => {
		if (!isAddHexMode) return [] as { q:number; r:number }[];
		const occupied = mapState.hexes;
		const border = new Map<string, { q:number; r:number; count:number }>();
		occupied.forEach(h => {
			getNeighborCoords(h.q, h.r).forEach(n => {
				const k = hexKey(n.q, n.r);
				if (!occupied.has(k)) {
					const prev = border.get(k) || { q: n.q, r: n.r, count: 0 };
					prev.count += 1;
					border.set(k, prev);
				}
			});
		});
		// Можно фильтровать по count>=1 (у нас всегда так) — оставляем всё
		return Array.from(border.values()).map(v => ({ q: v.q, r: v.r }));
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
					<p className="text-gray-600">Мастер еще не создал карту для этой кампании.</p>
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

	const getHexColor = (hex: HexData) => !hex.isRevealed && mode === 'player' ? '#1a1a1a' : hex.hexType.color;
	const getHexStroke = (k: string, hex: HexData) => mapState.selectedHex === k ? '#000' : (hoveredHex === k ? '#333' : (!hex.isRevealed && mode === 'player') ? '#404040' : '#000');
	const renderHexLabel = (hex: HexData, x: number, y: number) => {
		if (!hex.isRevealed && mode === 'player') return <Text x={x - 8} y={y - 6} text="?" fontSize={24} fill="#666"
		                                                       fontFamily="serif"/>;
		const label = hex.customName || hex.settlement?.name || hex.landmark?.name || hex.hexType.name;
		return <Text x={x - label.length * 3} y={y + 20} text={label} fontSize={9} fill="#000" fontFamily="serif"
		             fontStyle="bold"/>;
	};
	const renderHexIcon = (hex: HexData, x: number, y: number) => {
		if (!hex.isRevealed && mode === 'player') return null;
		let iconUrl: string;
		let size: number;
		if (hex.settlement) {
			iconUrl = iconDataUrls.settlement;
			size = 20;
		} else if (hex.landmark) {
			iconUrl = getLandmarkIconUrl(hex.landmark.name);
			size = 18;
		} else {
			iconUrl = getHexTypeIconUrl(hex.hexType.id);
			size = 16;
		}
		return (<Group><Circle x={x} y={y - 5} radius={size / 2 + 2} fill="white" stroke="#000" strokeWidth={1}/><HexIcon
			iconUrl={iconUrl} x={x} y={y - 5} size={size}/></Group>);
	};

	return (
		<div className="flex flex-col h-full" ref={containerRef}>
			<div className="bg-gray-100 border-b-2 border-gray-300 p-4 shadow-md">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold text-gray-900">{mode === 'master' ? 'Game Master Map' : 'Player Map'}</h2>
					<div className="flex gap-4 items-center">
						{mode === 'master' && (<>
							<button onClick={() => setMapState(p => ({...p, isEditMode: !p.isEditMode}))}
							        className={`px-4 py-2 rounded-md text-white ${mapState.isEditMode ? 'bg-gray-800 hover:bg-gray-900' : 'bg-gray-600 hover:bg-gray-700'}`}>{mapState.isEditMode ? 'Exit Edit' : 'Edit Mode'}</button>
							<button onClick={addNewHexes}
							        className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800">Expand Map
							</button>
							<button onClick={() => setIsAddHexMode(m => !m)}
							        className={`px-4 py-2 rounded-md text-white ${isAddHexMode ? 'bg-amber-700 hover:bg-amber-800' : 'bg-amber-600 hover:bg-amber-700'}`}>{isAddHexMode ? 'Finish Adding' : 'Add Hex'}</button>
							{selectedImageId && <button onClick={() => {
								imagesLayerRef.current?.deleteSelected();
							}} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Delete Image</button>}
						</>)}
						<span className="text-sm text-gray-700">Scale: {Math.round(scale * 100)}%</span>
					</div>
				</div>
			</div>
			<div className="flex flex-1">
				<div className="flex-1 bg-gray-50">
					<Stage ref={stageRef} width={canvasSize.width} height={canvasSize.height} draggable scaleX={scale}
					       scaleY={scale} x={pos.x} y={pos.y} onWheel={(e) => {
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
								return (<Group key={key}>
									<RegularPolygon x={x}
									                y={y}
									                sides={6}
									                rotation={30}
									                radius={radius}
									                fill={getHexColor(hex)}
									                stroke={getHexStroke(key, hex)}
									                strokeWidth={mapState.selectedHex === key ? 3 : 1}
									                onClick={() => handleHexClick(key)}
									                onMouseEnter={() => setHoveredHex(key)}
									                onMouseLeave={() => setHoveredHex(null)}
									                shadowBlur={mapState.selectedHex === key ? 10 : 0}
									                shadowColor="gold"/>
									{renderHexIcon(hex, x, y)}{renderHexLabel(hex, x, y)}
								</Group>);
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
                    <RegularPolygon
                      x={x}
                      y={y}
                      sides={6}
                      rotation={30}
                      radius={radius}
                      fill={'rgba(255,255,255,0.15)'}
                      stroke={'#888'}
                      dash={[4,4]}
                      strokeWidth={2}
                    />
                    <Text x={x-6} y={y-9} text="+" fontSize={20} fill="#555" listening={false} />
                  </Group>
                );
              })}
						</Layer>
						<CanvasImagesLayer ref={imagesLayerRef} stageRef={stageRef} containerRef={containerRef}
						                   editable={mode === 'master'} onSelectionChange={setSelectedImageId}/>
					</Stage>
				</div>
				{mapState.selectedHex && <HexDetailsPanel hex={mapState.hexes.get(mapState.selectedHex)!} mode={mode}
                                                  onClose={() => setMapState(p => ({...p, selectedHex: null}))}
                                                  isOpen={!!mapState.selectedHex}/>}
			</div>
			{editingHex && <HexEditModal hex={mapState.hexes.get(editingHex)!}
                                   onSave={(d: Partial<HexData>) => handleHexSave(editingHex, d)}
                                   onClose={() => setEditingHex(null)}/>}
		</div>
	);
}
