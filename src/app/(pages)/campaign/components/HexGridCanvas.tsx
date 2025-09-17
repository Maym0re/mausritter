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
import Konva from 'konva';
import { t } from '@/i18n';

interface HexGridCanvasProps {
	mode: 'master' | 'player';
	campaignId: string;
	isAddHexMode?: boolean;
	onAddHexModeChange?: (v: boolean) => void;
	markersPanelOpen?: boolean;
	onMarkersPanelOpenChange?: (v: boolean) => void;
}

interface MapData {
	id: string | null;
	campaignId: string;
	size: number;
	centerX: number;
	centerY: number;
	cells: ApiCell[];
	images?: { id: string; data: string; x: number; y: number; width: number; height: number }[];
	markers?: { id: string; image: string; x: number; y: number; z: number }[];
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

export function HexGridCanvas({mode, campaignId, isAddHexMode = false, onAddHexModeChange, markersPanelOpen, onMarkersPanelOpenChange}: HexGridCanvasProps) {
	const [scale, setScale] = useState(1);
	const [pos, setPos] = useState({x: 400, y: 300});
	const [mapState, setMapState] = useState<MapState>({hexes: new Map(), selectedHex: null, mode});
	const [editingHex, setEditingHex] = useState<string | null>(null);
	const [hoveredHex, setHoveredHex] = useState<string | null>(null);
	const [mapData, setMapData] = useState<MapData | null>(null);
	const [loading, setLoading] = useState(true);
	const [canvasSize, setCanvasSize] = useState({width: 1000, height: 700});
	const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
	const [pointerImages, setPointerImages] = useState<string[]>([]);
	const [selectedPointer, setSelectedPointer] = useState<string | null>(null);
	const [markers, setMarkers] = useState<{ id: string; image: string; x: number; y: number; z: number }[]>([]);
	const markersAddingRef = useRef(false);
	const [dragPreview, setDragPreview] = useState<{name: string; x: number; y: number} | null>(null);
	const markersPanelRef = useRef<HTMLDivElement | null>(null);

	const [imgCountryside] = useImage('/images/hexes/hex-vilage.webp');
	const [imgForest] = useImage('/images/hexes/hex-forest.webp');
	const [imgRiver] = useImage('/images/hexes/hex-river.webp');
	const [imgCity] = useImage('/images/hexes/hex-city.webp');
	const [imgBlank] = useImage('/images/hexes/hex-blank.webp');
	const [imgTitleLeft] = useImage('/images/hexes/hex-title-left.webp');
	const [imgTitleMiddle] = useImage('/images/hexes/hex-title-middle.webp');
	const [imgTitleRight] = useImage('/images/hexes/hex-title-right.webp');

	const markerImageCache = useRef<Record<string, HTMLImageElement>>({});
	const [, forceMarkerRerender] = useState(0);
	const getMarkerImage = useCallback((name: string) => {
		if (!name) return undefined;
		let img = markerImageCache.current[name];
		if (!img) {
			img = new window.Image();
			img.onload = () => forceMarkerRerender(v => v + 1);
			img.src = `/images/pointers/${name}`;
			markerImageCache.current[name] = img;
		}
		return img;
	}, []);

	const radius = 35;

	const stageRef = useRef<Konva.Stage | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const imagesLayerRef = useRef<CanvasImagesLayerHandle | null>(null);
	const toast = useToast();

	const hexGroupRefs = useRef<Record<string, Konva.Group>>({});

	const HEX_HEIGHT = useMemo(() => Math.sqrt(3) * radius, [radius]);

	const measureCtxRef = useRef<CanvasRenderingContext2D | null>(null);
	useEffect(() => {
		const canvas = document.createElement('canvas');
		measureCtxRef.current = canvas.getContext('2d');
	}, []);
	const measureTextWidth = useCallback((text: string, fontSize: number) => {
		const ctx = measureCtxRef.current;
		if (!ctx) return text.length * fontSize * 0.55; // fallback
		ctx.font = `bold ${fontSize}px serif`;
		return ctx.measureText(text).width;
	}, []);

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
				setMarkers(data.markers || []);
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
			const header = 74;
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
	const updateHexCell = useCallback(async (k: string, updates: Partial<HexData>) => {
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
	}, [mapData?.id, mapState.hexes, mode]);

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
	}, [updateHexCell]);

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
		return Array.from(border.values()).map(v => ({q: v.q, r: v.r}));
	}, [isAddHexMode, mapState.hexes]);

	useEffect(() => {
		if (markersPanelOpen && pointerImages.length === 0) {
			fetch('/api/maps/markers/pointers')
				.then(r => r.ok ? r.json() : [])
				.then((list: string[]) => setPointerImages(list))
				.catch(() => {});
		}
		if (!markersPanelOpen) setSelectedPointer(null);
	}, [markersPanelOpen, pointerImages.length]);

	const addMarker = useCallback(async (image: string, x: number, y: number) => {
		if (!mapData?.id) return;
		try {
			const r = await fetch('/api/maps/markers', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ hexMapId: mapData.id, image, x, y })
			});
			if (r.ok) {
				const mk = await r.json();
				setMarkers(prev => [...prev, mk].sort((a,b)=>a.z-b.z));
			} else if (r.status === 409) {
				toast.error(t('markers.limitToast'));
			} else {
				toast.error(t('markers.creationError'));
			}
		} catch (e) { console.error(e); }
	}, [mapData?.id, toast]);

	const updateMarker = useCallback((id: string, patch: Partial<{x:number;y:number;z:number}>) => {
		setMarkers(prev => prev.map(m => m.id===id? {...m, ...patch}: m));
		fetch(`/api/maps/markers/${id}`, { method: 'PUT', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(patch) }).catch(()=>{});
	}, []);

	const deleteMarker = useCallback((id: string) => {
		setMarkers(prev => prev.filter(m => m.id!==id));
		fetch(`/api/maps/markers/${id}`, { method: 'DELETE' }).catch(()=>{});
	}, []);

	const startPointerDrag = useCallback((name: string, clientX: number, clientY: number) => {
		const stage = stageRef.current;
		if (!stage) return;
		const rect = stage.container().getBoundingClientRect();
		const scale = stage.scaleX();
		const x = (clientX - rect.left - stage.x()) / scale - 16;
		const y = (clientY - rect.top - stage.y()) / scale - 32;
		setDragPreview({name, x, y});
	}, []);

	useEffect(() => {
		if (!dragPreview) return;
		const move = (e: MouseEvent) => {
			const stage = stageRef.current; if (!stage) return;
			const rect = stage.container().getBoundingClientRect();
			const scale = stage.scaleX();
			const x = (e.clientX - rect.left - stage.x()) / scale - 16;
			const y = (e.clientY - rect.top - stage.y()) / scale - 32;
			setDragPreview(p => p ? {...p, x, y} : p);
		};
		const up = (e: MouseEvent) => {
			if (markersPanelRef.current && e.target && markersPanelRef.current.contains(e.target as Node)) {
				setDragPreview(null);
				return cleanup();
			}
			const stage = stageRef.current; if (stage) {
				const rect = stage.container().getBoundingClientRect();
				if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
					const scale = stage.scaleX();
					const x = (e.clientX - rect.left - stage.x()) / scale;
					const y = (e.clientY - rect.top - stage.y()) / scale;
					if (dragPreview) addMarker(dragPreview.name, x - 16, y - 32);
				}
			}
			setDragPreview(null);
			cleanup();
		};
		const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { setDragPreview(null); cleanup(); } };
		const cleanup = () => {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('mouseup', up);
			window.removeEventListener('keydown', esc);
		};
		window.addEventListener('mousemove', move);
		window.addEventListener('mouseup', up);
		window.addEventListener('keydown', esc);
		return cleanup;
	}, [dragPreview, addMarker]);

	if (loading) {
		return (
			<div className="flex items-center justify-center h-full">
				<div className="text-center">
					<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-900"></div>
					<p className="mt-4 text-amber-900">{t('map.loading')}</p>
				</div>
			</div>
		);
	}

	if (!mapData?.id && mode === 'player') {
		return (
			<div className="flex items-center justify-center h-full">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">{t('map.notCreatedTitle')}</h2>
					<p className="text-gray-600">{t('map.notCreatedHint')}</p>
				</div>
			</div>
		);
	}

	if (!mapData?.id && mode === 'master') {
		return (
			<div className="flex items-center justify-center h-full">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">{t('map.createTitle')}</h2>
					<p className="text-gray-600 mb-6">{t('map.createHint')}</p>
					<button
						onClick={() => window.location.reload()}
						className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
					>
						{t('map.reload')}
					</button>
				</div>
			</div>
		);
	}

	const getHexStroke = (k: string) => mapState.selectedHex === k ? '#000' : (hoveredHex === k ? '#333' : '#000');

	const getHexImage = (hex: HexData) => {
		switch (hex.hexType.id) {
			case 'countryside':
				return imgCountryside;
			case 'forest':
				return imgForest;
			case 'river':
				return imgRiver;
			case 'human_town':
				return imgCity;
			case 'mountains':
				return imgForest;
			case 'swamp':
				return imgCountryside;
			default:
				return imgBlank;
		}
	};

	const renderHexImage = (img: HTMLImageElement | undefined, x: number, y: number) => {
		if (!img) return null;
		return (
			<Group x={x} y={y} listening={false}
			       clipFunc={(ctx) => {
				       const h = HEX_HEIGHT;
				       ctx.beginPath();
				       ctx.moveTo(-radius / 2, -h / 2);
				       ctx.lineTo(radius / 2, -h / 2);
				       ctx.lineTo(radius, 0);
				       ctx.lineTo(radius / 2, h / 2);
				       ctx.lineTo(-radius / 2, h / 2);
				       ctx.lineTo(-radius, 0);
				       ctx.closePath();
			       }}>
				<KonvaImage image={img} x={-radius} y={-HEX_HEIGHT / 2} width={radius * 2} height={HEX_HEIGHT}
				            listening={false}/>
			</Group>
		);
	};

	const renderHexLabel = (hex: HexData, x: number, y: number) => {
		const fontSize = 11;
		const paddingX = 6;
		const label = hex.customName || hex.settlement?.name || hex.landmark?.name || hex.hexType.name;
		const txtW = Math.ceil(measureTextWidth(label, fontSize));
		const lwOrig = imgTitleLeft?.width || 14;
		const lhOrig = imgTitleLeft?.height || 24;
		const mwOrig = imgTitleMiddle?.width || 32;
		const mhOrig = imgTitleMiddle?.height || lhOrig;
		const rwOrig = imgTitleRight?.width || 14;
		const desiredHeight = HEX_HEIGHT / 2;
		const scaleY = desiredHeight / mhOrig;
		const leftW = lwOrig * scaleY;
		const rightW = rwOrig * scaleY;
		const contentWidth = txtW + paddingX * 2;
		const middleMinWidth = mwOrig * scaleY;
		const middleWidth = Math.max(middleMinWidth, contentWidth);
		const totalWidth = leftW + middleWidth + rightW;
		const posY = y + radius - 5;
		const leftX = -totalWidth / 2;
		const middleX = leftX + leftW;
		const rightX = middleX + middleWidth;
		return (
			<Group x={x} y={posY} listening={false}>
				{imgTitleLeft && (
					<KonvaImage
						image={imgTitleLeft}
						x={leftX + 1}
						y={-desiredHeight / 2}
						width={leftW}
						height={desiredHeight}
						listening={false}
					/>
				)}
				{imgTitleMiddle && (
					<KonvaImage
						image={imgTitleMiddle}
						x={middleX}
						y={-desiredHeight / 2}
						width={middleWidth}
						height={desiredHeight}
						listening={false}
					/>
				)}
				{imgTitleRight && (
					<KonvaImage
						image={imgTitleRight}
						x={rightX - 1}
						y={-desiredHeight / 2}
						width={rightW}
						height={desiredHeight}
						listening={false}
					/>
				)}
				<Text
					text={label}
					fontSize={fontSize}
					fontFamily="Pirata One, serif"
					fontStyle="bold"
					fill="#19150f"
					x={-txtW / 2}
					y={-fontSize / 2 - 3}
					width={txtW}
					align="center"
					listening={false}
				/>
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
						if (selectedPointer && mode==='master') {
							const stage = stageRef.current; if (!stage) return;
							const scale = stage.scaleX();
							const ptr = stage.getPointerPosition();
							if (!ptr) return;
							const x = (ptr.x - stage.x()) / scale;
							const y = (ptr.y - stage.y()) / scale;
							addMarker(selectedPointer, x - 16, y - 32);
							setSelectedPointer(null);
							markersAddingRef.current = false;
							return;
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
									<Group key={key}
                    ref={node => { if (node) hexGroupRefs.current[key] = node; else delete hexGroupRefs.current[key]; }}
                    onMouseEnter={() => {
                      setHoveredHex(key);
                      const g = hexGroupRefs.current[key];
                      if (g) {
                        g.moveToTop();
                        g.to({ y: -3, duration: 0.15, easing: Konva.Easings.EaseOut });
                      }
                    }}
                    onMouseLeave={() => {
                      const g = hexGroupRefs.current[key];
                      if (g) g.to({ y: 0, duration: 0.15, easing: Konva.Easings.EaseOut });
                      setHoveredHex(null);
                    }}
									>
										{renderHexImage(img, x, y)}
										<RegularPolygon
											x={x}
											y={y}
											sides={6}
											rotation={30}
											radius={radius}
											fillEnabled={true}
											fill={'rgba(0,0,0,0.001)'}
											stroke={getHexStroke(key)}
											onClick={() => handleHexClick(key)}
											shadowBlur={mapState.selectedHex === key ? 10 : 0}
											shadowColor="gold"/>
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
                    ref={node => { if (node) hexGroupRefs.current[`potential-${k}`] = node; else delete hexGroupRefs.current[`potential-${k}`]; }}
                    onMouseEnter={() => {
                      setHoveredHex(k);
                      const g = hexGroupRefs.current[`potential-${k}`];
                      if (g) {
                        g.moveToTop();
                        g.to({ y: -3, duration: 0.15, easing: Konva.Easings.EaseOut });
                      }
                    }}
                    onMouseLeave={() => {
                      const g = hexGroupRefs.current[`potential-${k}`];
                      if (g) g.to({ y: 0, duration: 0.15, easing: Konva.Easings.EaseOut });
                      setHoveredHex(null);
                    }}
                    onClick={() => createHexAt(ph.q, ph.r)}
									>
										{renderHexImage(imgBlank, x, y)}
										<RegularPolygon
											x={x}
											y={y}
											sides={6}
											rotation={30}
											radius={radius}
											fillEnabled={true}
											fill={'rgba(0,0,0,0.001)'}
											stroke={'#888'}
											strokeWidth={1}
										/>
									</Group>
								);
							})}
						</Layer>
						<Layer listening={false}>
							{Array.from(mapState.hexes.entries()).map(([key, hex]) => {
								const isActive = mapState.selectedHex === key || hoveredHex === key;
								if (!isActive) return null;
								const h = new Tile({q: hex.q, r: hex.r});
								return <Group key={`label-${key}`}>{renderHexLabel(hex, h.x, h.y)}</Group>;
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
							toast.error(t('images.limitReached', { current: (current / 1024).toFixed(1), limit: (limit / 1024).toFixed(1) }));
						}}
							hexMapId={mapData?.id || undefined}
							initialImages={mapData?.images || []}
						/>
						<Layer>
							{markers.map(m => (
								<Group key={m.id}
									x={m.x}
									y={m.y}
									draggable={mode==='master'}
									onDragEnd={(e)=> updateMarker(m.id, { x: e.target.x(), y: e.target.y() })}
									onDblClick={() => { if (mode==='master') deleteMarker(m.id); }}
								>
									<KonvaImage image={getMarkerImage(m.image)} width={24} height={50} listening={mode==='master'} />
								</Group>
							))}
						</Layer>
						{dragPreview && (
							<Layer listening={false}>
								<KonvaImage image={getMarkerImage(dragPreview.name)} x={dragPreview.x} y={dragPreview.y} width={24} height={50} opacity={0.6} listening={false} />
							</Layer>
						)}
					</Stage>
				</div>
			</div>
			{editingHex &&
          <HexWindow mode={mode} hex={mapState.hexes.get(editingHex)!} onSave={(d) => handleHexSave(editingHex, d)}
                     onDelete={mode === 'master' ? () => handleHexDelete(editingHex) : undefined}
                     onClose={() => setEditingHex(null)}/>}
			{markersPanelOpen && mode==='master' && (
				<div ref={markersPanelRef} className="absolute top-4 right-4 z-[1200] bg-stone-900/90 border border-stone-700 rounded-lg p-3 w-60 max-h-80 overflow-auto space-y-2">
					<div className="flex justify-between items-center mb-1">
						<span className="text-xs text-stone-300 font-semibold">{t('markers.count', { count: markers.length })}</span>
						<button className="text-xs text-stone-400 hover:text-white" onClick={()=>onMarkersPanelOpenChange?.(false)}>✕</button>
					</div>
					{markers.length>=20 && <div className="text-[10px] text-red-400">{t('markers.limitReached')}</div>}
					<div className="grid grid-cols-4 gap-2">
						{pointerImages.map(fn => {
							const isActive = selectedPointer === fn;
							const disabled = markers.length>=20;
							return (
								<button key={fn}
									className={`relative border rounded p-1 hover:border-amber-400 select-none ${isActive? 'border-emerald-500 bg-stone-700':'border-stone-600'}`}
									disabled={disabled}
									onClick={(e)=> {
										if (disabled || dragPreview) return;
										setSelectedPointer(p=> p===fn? null: fn);
										markersAddingRef.current = true;
									}}
									onMouseDown={(e) => {
										if (disabled) return;
										if (e.button !== 0) return;
										startPointerDrag(fn, e.clientX, e.clientY);
										e.preventDefault();
									}}
									onTouchStart={(e)=> {
										if (disabled) return;
										const touch = e.touches[0];
										startPointerDrag(fn, touch.clientX, touch.clientY);
										setSelectedPointer(null);
									}}
								>
									<img src={`/images/pointers/${fn}`} alt={fn} className="w-10 h-10 object-contain pointer-events-none" />
								</button>
							);
						})}
					</div>
					{selectedPointer && <div className="text-[10px] text-emerald-400 mt-2">{t('markers.pickPlace')}</div>}
				</div>
			)}
		</div>
	);
}
