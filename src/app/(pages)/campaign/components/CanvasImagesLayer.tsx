"use client";
import React, {
	useState,
	useEffect,
	useImperativeHandle,
	forwardRef,
	useRef,
	useCallback
} from "react";
import { Layer, Image as KonvaImage, Transformer, Group } from "react-konva";
import type Konva from "konva";

export interface CanvasImagesLayerHandle {
	deleteSelected: () => void;
	clearSelection: () => void;
}

interface CanvasImagesLayerProps {
	stageRef: React.RefObject<Konva.Stage | null>;
	containerRef: React.RefObject<HTMLDivElement | null>;
	editable: boolean;
	onSelectionChange?: (id: string | null) => void;
	maxTotalMB?: number;
	onStorageLimit?: (current: number, limitBytes: number) => void;
	hexMapId?: string;
	initialImages?: { id: string; data: string; x: number; y: number; width: number; height: number }[];
}

interface CanvasImage {
	id: string;
	img: HTMLImageElement;
	data: string;
	x: number;
	y: number;
	width: number;
	height: number;
	ratio: number;
	sizeBytes: number;
	_pending?: boolean;
}

const MAX_IMG_W = 1024;
const MAX_IMG_H = 1024;
const JPEG_QUALITY = 0.85;

export const CanvasImagesLayer = forwardRef<CanvasImagesLayerHandle, CanvasImagesLayerProps>(function CanvasImagesLayer(
	{stageRef, containerRef, editable, onSelectionChange, maxTotalMB, onStorageLimit, hexMapId, initialImages},
	ref
) {
	const [images, setImages] = useState<CanvasImage[]>([]);
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const transformerRef = useRef<Konva.Transformer | null>(null);
	const selectedNodeRef = useRef<Konva.Image | null>(null);

	useImperativeHandle(ref, () => ({
		deleteSelected: () => {
			if (selectedId) {
				setImages(prev => prev.filter(i => i.id !== selectedId));
				setSelectedId(null);
				selectedNodeRef.current = null;
				if (transformerRef.current) {
					transformerRef.current.nodes([]);
					transformerRef.current.getLayer()?.batchDraw();
				}
			}
		},
		clearSelection: () => {
			if (selectedId) {
				setSelectedId(null);
				selectedNodeRef.current = null;
				if (transformerRef.current) {
					transformerRef.current.nodes([]);
					transformerRef.current.getLayer()?.batchDraw();
				}
			}
		}
	}), [selectedId]);

	useEffect(() => {
		onSelectionChange?.(selectedId);
	}, [selectedId, onSelectionChange]);

	const getStageCoords = useCallback((clientX?: number, clientY?: number) => {
		const stage = stageRef.current;
		if (!stage) return {x: 0, y: 0};
		const scale = stage.scaleX();
		if (clientX !== undefined && clientY !== undefined) {
			const rect = stage.container().getBoundingClientRect();
			const px = clientX - rect.left;
			const py = clientY - rect.top;
			return {x: (px - stage.x()) / scale, y: (py - stage.y()) / scale};
		}
		const pointer = stage.getPointerPosition();
		if (!pointer) return {x: 0, y: 0};
		return {x: (pointer.x - stage.x()) / scale, y: (pointer.y - stage.y()) / scale};
	}, [stageRef]);

	const dataUrlToSize = (dataUrl: string) => {
		const comma = dataUrl.indexOf(',');
		if (comma === -1) return 0;
		const b64 = dataUrl.slice(comma + 1);
		return Math.floor(b64.length * 0.75);
	};

	const getTotalBytes = useCallback((list: CanvasImage[]) => list.reduce((sum, i) => sum + (i.sizeBytes || 0), 0), []);

	const resolvedMaxBytes = React.useMemo(() => {
		if (typeof maxTotalMB === 'number') return maxTotalMB * 1024 * 1024;
		return 5 * 1024 * 1024;
	}, [maxTotalMB]);

	const addImage = useCallback((dataUrl: string, x: number, y: number) => {
		const newSize = dataUrlToSize(dataUrl);
		setImages(prev => {
			const currentTotal = getTotalBytes(prev);
			if (currentTotal + newSize > resolvedMaxBytes) {
				onStorageLimit?.(currentTotal, resolvedMaxBytes);
				return prev;
			}
			const tempId = `temp-${crypto.randomUUID()}`;
			const img = new window.Image();
			img.onload = () => {
				const ratio = img.width / img.height || 1;
				setImages(p2 => p2.map(im => im.id === tempId ? {...im, ratio, width: img.width, height: img.height, x: x - img.width/2, y: y - img.height/2 } : im));
				if (hexMapId && editable) {
					fetch('/api/maps/images', {
						method: 'POST',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify({ hexMapId, data: dataUrl, x: x - img.width/2, y: y - img.height/2, width: img.width, height: img.height })
					}).then(r => r.ok ? r.json(): Promise.reject(r)).then(created => {
						setImages(p3 => p3.map(im => im.id === tempId ? {...im, id: created.id, _pending: false } : im));
					}).catch(err => {
						console.error('Save image failed', err);
						setImages(p3 => p3.filter(im => im.id !== tempId));
					});
				}
			};
			img.src = dataUrl;
			return [...prev, {
				id: tempId,
				img,
				data: dataUrl,
				x: x - 50,
				y: y - 50,
				width: 100,
				height: 100,
				ratio: 1,
				sizeBytes: newSize,
				_pending: true
			}];
		});
	}, [getTotalBytes, resolvedMaxBytes, onStorageLimit, hexMapId, editable]);

	const fileToDataUrl = (blob: Blob) => new Promise<string>((res) => {
		const r = new FileReader();
		r.onload = () => res(r.result as string);
		r.readAsDataURL(blob);
	});

	const compressFile = useCallback(async (file: File): Promise<string> => {
		if (file.size <= 700 * 1024) return fileToDataUrl(file);
		const bitmap = await createImageBitmap(file);
		const ratio = Math.min(1, MAX_IMG_W / bitmap.width, MAX_IMG_H / bitmap.height);
		const w = Math.round(bitmap.width * ratio);
		const h = Math.round(bitmap.height * ratio);
		const canvas = document.createElement('canvas');
		canvas.width = w;
		canvas.height = h;
		const ctx = canvas.getContext('2d');
		if (!ctx) return fileToDataUrl(file);
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = 'high';
		ctx.drawImage(bitmap, 0, 0, w, h);
		return canvas.toDataURL('image/jpeg', JPEG_QUALITY);
	}, []);

	const handleFiles = useCallback(async (files: FileList, clientX?: number, clientY?: number) => {
		if (!editable) return;
		const {x, y} = getStageCoords(clientX, clientY);
		for (const f of Array.from(files)) {
			if (!f.type.startsWith('image/')) continue;
			try {
				const dataUrl = await compressFile(f);
				addImage(dataUrl, x, y);
			} catch (e) {
				console.error('Image load error', e);
			}
		}
	}, [editable, getStageCoords, compressFile, addImage]);

	// Paste
	useEffect(() => {
		if (!editable) return;
		const onPaste = (e: ClipboardEvent) => {
			const items = e.clipboardData?.items;
			if (!items) return;
			const {x, y} = getStageCoords();
			for (const it of items) {
				if (it.kind === 'file' && it.type.startsWith('image/')) {
					const file = it.getAsFile();
					if (file) compressFile(file).then(d => addImage(d, x, y));
				}
			}
		};
		document.addEventListener('paste', onPaste);
		return () => document.removeEventListener('paste', onPaste);
	}, [editable, getStageCoords, compressFile, addImage]);

	// Drag & Drop
	useEffect(() => {
		if (!editable) return;
		const el = containerRef.current;
		if (!el) return;
		const onDragOver = (e: DragEvent) => {
			e.preventDefault();
		};
		const onDrop = (e: DragEvent) => {
			e.preventDefault();
			if (e.dataTransfer?.files) handleFiles(e.dataTransfer.files, e.clientX, e.clientY);
		};
		el.addEventListener('dragover', onDragOver);
		el.addEventListener('drop', onDrop);
		return () => {
			el.removeEventListener('dragover', onDragOver);
			el.removeEventListener('drop', onDrop);
		};
	}, [editable, containerRef, handleFiles]);

	useEffect(() => {
		const transformer = transformerRef.current;
		if (!transformer) return;
		if (!selectedId) {
			transformer.nodes([]);
			transformer.getLayer()?.batchDraw();
			return;
		}
		const node = selectedNodeRef.current;
		if (node && node.getStage()) transformer.nodes([node]); else transformer.nodes([]);
		transformer.getLayer()?.batchDraw();
	}, [selectedId, images]);

	useEffect(() => {
		if (!editable) return;
		const stage = stageRef.current;
		if (!stage) return;
		const handler = (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
			const target = e.target as Konva.Node;
			const isImage = target && (target as any).getClassName && (target as any).getClassName() === 'Image';
			const parent = (target as any)?.getParent && (target as any).getParent();
			const isTransformer = (target as any)?.getClassName?.() === 'Transformer' || parent?.getClassName?.() === 'Transformer';
			if (!isImage && !isTransformer) {
				setSelectedId(null);
				selectedNodeRef.current = null;
			}
		};
		stage.on('mousedown.canvasImagesLayer touchstart.canvasImagesLayer', handler);
		return () => {
			stage.off('mousedown.canvasImagesLayer touchstart.canvasImagesLayer', handler);
		};
	}, [editable, stageRef]);

	const onImageSelect = (node: Konva.Image, id: string) => {
		if (!editable) return;
		setSelectedId(id);
		selectedNodeRef.current = node;
	};

	const updateServerImage = useCallback((img: CanvasImage) => {
		if (!editable || !hexMapId) return;
		if (img.id.startsWith('temp-')) return;
		fetch(`/api/maps/images/${img.id}`, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ x: img.x, y: img.y, width: img.width, height: img.height })
		}).catch(e => console.error('Update image failed', e));
	}, [editable, hexMapId]);

	const handleTransformEnd = (node: Konva.Image, id: string) => {
		const scaleX = node.scaleX();
		const scaleY = node.scaleY();
		const newWidth = Math.max(10, node.width() * scaleX);
		const newHeight = Math.max(10, node.height() * scaleY);
		node.scaleX(1);
		node.scaleY(1);
		setImages(prev => prev.map(img => img.id === id ? {
			...img,
			width: newWidth,
			height: newHeight,
			x: node.x(),
			y: node.y()
		} : img));
		const updated = images.find(i => i.id === id);
		if (updated) updateServerImage({...updated, width: newWidth, height: newHeight, x: node.x(), y: node.y()});
	};

	useEffect(() => {
		if (!editable) return;
		const onKey = (e: KeyboardEvent) => {
			if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId) {
				setImages(prev => prev.filter(i => i.id !== selectedId));
				setSelectedId(null);
				selectedNodeRef.current = null;
				if (transformerRef.current) {
					transformerRef.current.nodes([]);
					transformerRef.current.getLayer()?.batchDraw();
				}
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [editable, selectedId]);

	useEffect(() => {
		if (!initialImages) return;
		setImages(() => {
			const list: CanvasImage[] = [];
			initialImages.forEach(raw => {
				const imgEl = new Image();
				imgEl.src = raw.data;
				list.push({
					id: raw.id,
					img: imgEl,
					data: raw.data,
					x: raw.x,
					y: raw.y,
					width: raw.width,
					height: raw.height,
					ratio: raw.width / raw.height || 1,
					sizeBytes: dataUrlToSize(raw.data)
				});
			});
			return list;
		});
	}, [initialImages]);

	return (
		<Layer>
			{images.map(img => (
				<KonvaImage
					key={img.id}
					image={img.img}
					x={img.x}
					y={img.y}
					width={img.width}
					height={img.height}
					listening={editable}
					draggable={editable}
					opacity={img._pending ? 0.6 : 1}
					onClick={e => onImageSelect(e.target as Konva.Image, img.id)}
					onTap={e => onImageSelect(e.target as Konva.Image, img.id)}
					onDragEnd={e => {
						const {x, y} = e.target.position();
						setImages(prev => prev.map(p => p.id === img.id ? {...p, x, y} : p));
						updateServerImage({...img, x, y});
					}}
					onTransformEnd={e => handleTransformEnd(e.target as Konva.Image, img.id)}
					ref={node => {
						if (node && img.id === selectedId) {
							selectedNodeRef.current = node;
						}
					}}
				/>
			))}
			{editable && (
				<Transformer
					ref={transformerRef}
					rotateEnabled={false}
					keepRatio={true}
					enabledAnchors={["top-left", "top-right", "bottom-left", "bottom-right"]}
					anchorSize={10}
					borderDash={[4, 4]}
				/>
			)}
			{editable && selectedId && (() => {
				const img = images.find(i => i.id === selectedId);
				if (!img) return null;
				const btnX = img.x + img.width - 14;
				const btnY = img.y - 6;
				return (
					<Group
						key="delete-btn-overlay"
						x={btnX}
						y={btnY}
						onClick={() => {
							setImages(prev => prev.filter(i => i.id !== selectedId));
							if (editable && hexMapId && !selectedId.startsWith('temp-')) {
								fetch(`/api/maps/images/${selectedId}`, { method: 'DELETE' }).catch(e => console.error('Delete image failed', e));
							}
							setSelectedId(null);
							selectedNodeRef.current = null;
							if (transformerRef.current) {
								transformerRef.current.nodes([]);
								transformerRef.current.getLayer()?.batchDraw();
							}
						}}
						listening
						cursor="pointer"
					>
						<KonvaImage
							image={(() => { const c=document.createElement('canvas'); c.width=24; c.height=24; const ctx=c.getContext('2d'); if(ctx){ ctx.fillStyle='rgba(0,0,0,0.65)'; ctx.beginPath(); ctx.arc(12,12,12,0,Math.PI*2); ctx.fill(); ctx.strokeStyle='#fff'; ctx.lineWidth=1; ctx.stroke(); ctx.font='16px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillStyle='#fff'; ctx.fillText('×',12,12); } const i=new Image(); i.src=c.toDataURL(); return i; })()}
							opacity={0.9}
						/>
					</Group>
				);
			})()}
		</Layer>
	);
});
