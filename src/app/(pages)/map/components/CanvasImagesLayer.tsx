"use client";
import React, {
	useState,
	useEffect,
	useImperativeHandle,
	forwardRef,
	useRef,
	useCallback
} from "react";
import { Layer, Image as KonvaImage, Transformer } from "react-konva";
import type Konva from "konva";

// Публичный интерфейс для управления из родителя
export interface CanvasImagesLayerHandle {
	deleteSelected: () => void;
	clearSelection: () => void;
}

interface CanvasImagesLayerProps {
	stageRef: React.RefObject<Konva.Stage | null>;
	containerRef: React.RefObject<HTMLDivElement | null>;
	editable: boolean;
	onSelectionChange?: (id: string | null) => void;
}

interface CanvasImage {
	id: string;
	img: HTMLImageElement;
	x: number;
	y: number;
	width: number;
	height: number;
	ratio: number;
}

const MAX_IMG_W = 1024;
const MAX_IMG_H = 1024;
const JPEG_QUALITY = 0.85;

export const CanvasImagesLayer = forwardRef<CanvasImagesLayerHandle, CanvasImagesLayerProps>(function CanvasImagesLayer(
	{stageRef, containerRef, editable, onSelectionChange},
	ref
) {
	const [images, setImages] = useState<CanvasImage[]>([]);
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const transformerRef = useRef<Konva.Transformer | null>(null);
	const selectedNodeRef = useRef<Konva.Image | null>(null);

	// Экспортируем API
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

	// Сообщаем родителю о смене выделения
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

	const addImage = useCallback((dataUrl: string, x: number, y: number) => {
		const img = new window.Image();
		img.onload = () => {
			const ratio = img.width / img.height || 1;
			setImages(prev => [...prev, {
				id: crypto.randomUUID(),
				img,
				x: x - img.width / 2,
				y: y - img.height / 2,
				width: img.width,
				height: img.height,
				ratio
			}]);
		};
		img.src = dataUrl;
	}, []);

	const fileToDataUrl = (blob: Blob) => new Promise<string>((res) => {
		const r = new FileReader();
		r.onload = () => res(r.result as string);
		r.readAsDataURL(blob);
	});

	const compressFile = useCallback(async (file: File): Promise<string> => {
		// Если файл небольшой – просто читаем
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

	// Подключение Transformer к выбранному узлу
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

	// Глобальный обработчик кликов по сцене для сброса выделения
	useEffect(() => {
		if (!editable) return;
		const stage = stageRef.current;
		if (!stage) return;
		const handler = (e: any) => {
			const target = e.target;
			const isImage = target && target.getClassName && target.getClassName() === 'Image';
			const parent = target && target.getParent && target.getParent();
			const isTransformer = target?.getClassName?.() === 'Transformer' || parent?.getClassName?.() === 'Transformer';
			if (!isImage && !isTransformer) {
				setSelectedId(null);
				selectedNodeRef.current = null;
			}
		};
		stage.on('mousedown.canvasImagesLayer touchstart.canvasImagesLayer', handler);
		return () => {
			stage.off('mousedown.canvasImagesLayer touchstart.canvasImagesLayer', handler);
		};
	}, [editable]);

	const onImageSelect = (node: Konva.Image, id: string) => {
		if (!editable) return;
		setSelectedId(id);
		selectedNodeRef.current = node;
	};

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
	};

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
					onClick={e => onImageSelect(e.target as Konva.Image, img.id)}
					onTap={e => onImageSelect(e.target as Konva.Image, img.id)}
					onDragEnd={e => {
						const {x, y} = e.target.position();
						setImages(prev => prev.map(p => p.id === img.id ? {...p, x, y} : p));
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
		</Layer>
	);
});
