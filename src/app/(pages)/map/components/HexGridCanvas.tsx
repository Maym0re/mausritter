'use client';
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Stage, Layer, Group, RegularPolygon, Text, Circle, Image as KonvaImage } from "react-konva";
import { Transformer } from "react-konva";
import { defineHex, Grid, Orientation, spiral } from "honeycomb-grid";
import { HexData, MapState, HexType } from "@/types/map";
import { hexKey, getRandomHexType, getRandomLandmark, getRandomLandmarkDetail, generateSettlement, getNeighborCoords } from "@/lib/mapUtils";
import { getHexTypeIconUrl, getLandmarkIconUrl, iconDataUrls } from "@/lib/iconUtils";
import { HexIcon } from "@/components/HexIcon";
import { HexEditModal } from "./HexEditModal";
import { HexDetailsPanel } from "./HexDetailsPanel";

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

export function HexGridCanvas({ mode, campaignId }: HexGridCanvasProps) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 400, y: 300 });
  const [mapState, setMapState] = useState<MapState>({
    hexes: new Map(),
    selectedHex: null,
    mode,
    isEditMode: false,
  });
  const [editingHex, setEditingHex] = useState<string | null>(null);
  const [hoveredHex, setHoveredHex] = useState<string | null>(null);
  const [mapData, setMapData] = useState<MapData | null>(null);
  const [loading, setLoading] = useState(true);
  const [canvasSize, setCanvasSize] = useState({ width: 1000, height: 700 });

  // ====== ДОБАВЛЕНО: изображения на canvas ======
  interface CanvasImage { id: string; img: HTMLImageElement; x: number; y: number; width: number; height: number; }
  const [images, setImages] = useState<CanvasImage[]>([]);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const stageRef = useRef<import('konva').Stage | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const transformerRef = useRef<import('konva').Transformer | null>(null);
  const selectedImageRef = useRef<import('konva').Image | null>(null);
  const MAX_IMG_W = 1024;
  const MAX_IMG_H = 1024;
  const JPEG_QUALITY = 0.85;

  const getStageCoords = (clientX?: number, clientY?: number) => {
    const stage = stageRef.current;
    if (!stage) return { x: 0, y: 0 };
    const scaleVal = stage.scaleX();
    if (clientX !== undefined && clientY !== undefined) {
      const rect = stage.container().getBoundingClientRect();
      const px = clientX - rect.left; const py = clientY - rect.top;
      return { x: (px - stage.x()) / scaleVal, y: (py - stage.y()) / scaleVal };
    }
    const p = stage.getPointerPosition();
    if (!p) return { x: 0, y: 0 };
    return { x: (p.x - stage.x()) / scaleVal, y: (p.y - stage.y()) / scaleVal };
  };

  const loadImage = (dataUrl: string, x: number, y: number) => new Promise<void>(res => {
    const img = new Image();
    img.onload = () => {
      setImages(prev => [...prev, { id: crypto.randomUUID(), img, x: x - img.width / 2, y: y - img.height / 2, width: img.width, height: img.height }]);
      res();
    };
    img.src = dataUrl;
  });

  const compressFile = async (file: File): Promise<string> => {
    const needResize = file.size > 700 * 1024; // >700KB
    const fileToDataURL = (f: Blob) => new Promise<string>(r => { const fr = new FileReader(); fr.onload = () => r(fr.result as string); fr.readAsDataURL(f); });
    if (!needResize) return fileToDataURL(file);
    const bitmap = await createImageBitmap(file);
    const ratio = Math.min(1, MAX_IMG_W / bitmap.width, MAX_IMG_H / bitmap.height);
    const w = Math.round(bitmap.width * ratio); const h = Math.round(bitmap.height * ratio);
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const ctx = c.getContext('2d'); if (!ctx) return fileToDataURL(file);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(bitmap, 0, 0, w, h);
    return c.toDataURL('image/jpeg', JPEG_QUALITY);
  };

  const handleFiles = useCallback(async (files: FileList, clientX?: number, clientY?: number) => {
    const { x, y } = getStageCoords(clientX, clientY);
    for (const f of Array.from(files)) {
      if (!f.type.startsWith('image/')) continue;
      try { const dataUrl = await compressFile(f); await loadImage(dataUrl, x, y); } catch (e) { console.error('Image load error', e); }
    }
  }, [compressFile]);

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items; if (!items) return;
      const { x, y } = getStageCoords();
      for (const it of items) {
        if (it.kind === 'file' && it.type.startsWith('image/')) {
          const file = it.getAsFile(); if (file) compressFile(file).then(d => loadImage(d, x, y));
        }
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedImageId) {
        setImages(prev => prev.filter(i => i.id !== selectedImageId));
        setSelectedImageId(null);
      }
    };
    document.addEventListener('paste', onPaste);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('paste', onPaste);
      document.removeEventListener('keydown', onKey);
    };
  }, [compressFile, selectedImageId]);

  useEffect(() => {
    const el = containerRef.current; if (!el) return;
    const over = (e: DragEvent) => { e.preventDefault(); };
    const drop = (e: DragEvent) => { e.preventDefault(); if (e.dataTransfer?.files) handleFiles(e.dataTransfer.files, e.clientX, e.clientY); };
    el.addEventListener('dragover', over); el.addEventListener('drop', drop);
    return () => { el.removeEventListener('dragover', over); el.removeEventListener('drop', drop); };
  }, [handleFiles]);
  // ====== КОНЕЦ ДОБАВЛЕНИЯ ======

  // Подключение Transformer к выбранному изображению (перемещено выше ранних return)
  useEffect(() => {
    const transformer = transformerRef.current;
    const node = selectedImageRef.current;
    if (transformer && node) {
      transformer.nodes([node]);
      transformer.getLayer()?.batchDraw();
    } else if (transformer) {
      transformer.nodes([]);
      transformer.getLayer()?.batchDraw();
    }
  }, [selectedImageId, images]);

  const radius = 35;
  const mapRadius = 2;

  // Загрузка данных карты из базы данных
  useEffect(() => {
    if (campaignId) {
      loadMapData();
      loadHexTypes();
    }
  }, [campaignId]);

  const loadMapData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/maps?campaignId=${campaignId}`);
      if (response.ok) {
        const data = await response.json();
        setMapData(data);

        // Преобразуем данные ячеек в Map
        const hexesMap = new Map<string, HexData>();

        if (data.cells && data.cells.length > 0) {
          data.cells.forEach((cell: any) => {
            const key = hexKey(cell.q, cell.r);
            hexesMap.set(key, {
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
        }

        setMapState(prev => ({ ...prev, hexes: hexesMap }));
      }
    } catch (error) {
      console.error('Failed to load map data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadHexTypes = async () => {
    try {
      const response = await fetch('/api/maps/types');
      if (response.ok) {
        const data = await response.json();
        console.log('Loaded hex types:', data); // Просто логируем для отладки
      }
    } catch (error) {
      console.error('Failed to load hex types:', error);
    }
  };

  // Сохранение данных карты в базу данных
  const saveMapData = async () => {
    try {
      setLoading(true);
      const hexesArray = Array.from(mapState.hexes.entries()).map(([key, hex]) => ({
        q: hex.q,
        r: hex.r,
        s: hex.s,
        hexType: hex.hexType,
        landmark: hex.landmark,
        landmarkDetail: hex.landmarkDetail,
        settlement: hex.settlement,
        isRevealed: hex.isRevealed,
        notes: hex.notes,
        customName: hex.customName
      }));

      const response = await fetch(`/api/maps?campaignId=${campaignId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cells: hexesArray }),
      });

      if (!response.ok) {
        throw new Error('Failed to save map data');
      }

      // Обновляем состояние карты с новыми данными из базы
      loadMapData();
    } catch (error) {
      console.error('Error saving map data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Хук для отслеживания размеров окна
  useEffect(() => {
    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const headerHeight = 120;
      const availableHeight = height - headerHeight;

      const newWidth = width;
      const newHeight = Math.max(availableHeight, 400);

      setCanvasSize({
        width: newWidth,
        height: newHeight
      });

      setPos({
        x: newWidth / 2,
        y: newHeight / 2
      });
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // Мемоизируем создание Tile и grid
  const { Tile, grid } = useMemo(() => {
    const Tile = defineHex({
      dimensions: radius,
      orientation: Orientation.FLAT,
    });

    const grid = new Grid(Tile, spiral({ radius: mapRadius }));
    return { Tile, grid };
  }, [radius, mapRadius]);

  // Обновляем ячейку в базе данных
  const updateHexCell = async (hexKey: string, updates: Partial<HexData>) => {
    if (!mapData?.id) return;

    const hex = mapState.hexes.get(hexKey);
    if (!hex) return;

    try {
      const response = await fetch('/api/maps/cells', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hexMapId: mapData.id,
          q: hex.q,
          r: hex.r,
          s: hex.s,
          hexTypeId: updates.hexType?.id || hex.hexType?.id,
          landmarkId: updates.landmark?.id || hex.landmark?.id,
          landmarkDetailId: updates.landmarkDetail?.id || hex.landmarkDetail?.id,
          settlementId: updates.settlement?.id || hex.settlement?.id,
          isRevealed: updates.isRevealed !== undefined ? updates.isRevealed : hex.isRevealed,
          notes: updates.notes !== undefined ? updates.notes : hex.notes,
          customName: updates.customName !== undefined ? updates.customName : hex.customName,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update hex cell');
      }
    } catch (error) {
      console.error('Error updating hex cell:', error);
    }
  };

  const handleHexClick = useCallback(async (hexKey: string) => {
    if (mode === 'master') {
      if (mapState.isEditMode) {
        setEditingHex(hexKey);
      } else {
        // Переключаем видимость для игроков
        const hex = mapState.hexes.get(hexKey);
        if (hex) {
          const newRevealed = !hex.isRevealed;
          setMapState(prev => {
            const newHexes = new Map(prev.hexes);
            newHexes.set(hexKey, { ...hex, isRevealed: newRevealed });
            return { ...prev, hexes: newHexes };
          });

          // Обновляем в базе данных
          await updateHexCell(hexKey, { isRevealed: newRevealed });
        }
      }
    }

    setMapState(prev => ({ ...prev, selectedHex: hexKey }));
  }, [mode, mapState.isEditMode, mapState.hexes, mapData?.id]);

  const handleHexSave = useCallback(async (hexKey: string, hexData: Partial<HexData>) => {
    setMapState(prev => {
      const newHexes = new Map(prev.hexes);
      const existing = newHexes.get(hexKey);
      if (existing) {
        newHexes.set(hexKey, { ...existing, ...hexData });
      }
      return { ...prev, hexes: newHexes };
    });

    // Обновляем в базе данных
    await updateHexCell(hexKey, hexData);
    setEditingHex(null);
  }, [mapData?.id]);

  const addNewHexes = useCallback(async () => {
    if (!mapData?.id) return;

    setMapState(prev => {
      const newHexes = new Map(prev.hexes);
      const existingCoords = Array.from(newHexes.keys()).map(key => {
        const [q, r] = key.split(',').map(Number);
        return { q, r };
      });

      // Находим все возможные новые позиции вокруг существующих гексов
      const potentialNew = new Set<string>();
      existingCoords.forEach(({ q, r }) => {
        getNeighborCoords(q, r).forEach(({ q: nq, r: nr }) => {
          const key = hexKey(nq, nr);
          if (!newHexes.has(key)) {
            potentialNew.add(key);
          }
        });
      });

      // Добавляем новые гексы локально
      potentialNew.forEach(key => {
        const [q, r] = key.split(',').map(Number);
        const hexType = getRandomHexType();
        const landmark = getRandomLandmark(hexType.id);
        const landmarkDetail = getRandomLandmarkDetail();

        newHexes.set(key, {
          q, r, s: -(q + r),
          hexType,
          landmark,
          landmarkDetail,
          settlement: Math.random() < 0.2 ? generateSettlement() : undefined,
          isRevealed: mode === 'master',
          notes: ""
        });
      });

      // Создаем новые ячейки в базе данных
      potentialNew.forEach(async (key) => {
        const [q, r] = key.split(',').map(Number);
        try {
          await fetch('/api/maps/cells', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              hexMapId: mapData.id,
              q,
              r,
              s: -(q + r),
              hexTypeId: 'countryside'
            }),
          });
        } catch (error) {
          console.error('Error creating hex cell:', error);
        }
      });

      return { ...prev, hexes: newHexes };
    });
  }, [mode, mapData?.id]);

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

  const getHexColor = (hex: HexData) => {
    if (!hex.isRevealed && mode === 'player') {
      return '#1a1a1a'; // Темный для тумана войны
    }
    return hex.hexType.color;
  };

  const getHexStroke = (hexKey: string, hex: HexData) => {
    if (mapState.selectedHex === hexKey) return '#000000'; // Черная обводка для выбранного
    if (hoveredHex === hexKey) return '#333333'; // Темно-серая для наведения
    if (!hex.isRevealed && mode === 'player') return '#404040';
    return '#000000'; // Черная обводка для всех остальных
  };

  const renderHexLabel = (hex: HexData, x: number, y: number) => {
    if (!hex.isRevealed && mode === 'player') {
      return (
        <Text
          x={x - 8}
          y={y - 6}
          text="?"
          fontSize={24}
          fill="#666"
          fontFamily="serif"
        />
      );
    }

    const label = hex.customName || hex.settlement?.name || hex.landmark?.name || hex.hexType.name;
    return (
      <Text
        x={x - label.length * 3}
        y={y + 20} // Сместим текст ниже иконки
        text={label}
        fontSize={9}
        fill="#000000" // Черный текст
        fontWeight="bold"
        fontFamily="serif"
      />
    );
  };

  const renderHexIcon = (hex: HexData, x: number, y: number) => {
    if (!hex.isRevealed && mode === 'player') return null;

    // Определяем иконку и размер в зависимости от содержимого
    let iconUrl: string;
    let iconSize = 16;

    if (hex.settlement) {
      iconUrl = iconDataUrls.settlement;
      iconSize = 20;
    } else if (hex.landmark) {
      iconUrl = getLandmarkIconUrl(hex.landmark.name);
      iconSize = 18;
    } else {
      iconUrl = getHexTypeIconUrl(hex.hexType.id);
      iconSize = 16;
    }

    return (
      <Group>
        {/* Белый фон для иконки */}
        <Circle
          x={x}
          y={y - 5}
          radius={iconSize / 2 + 2}
          fill="white"
          stroke="#000000"
          strokeWidth={1}
        />
        {/* SVG иконка */}
        <HexIcon
          iconUrl={iconUrl}
          x={x}
          y={y - 5}
          size={iconSize}
        />
      </Group>
    );
  };

  return (
    <div className="flex flex-col h-full" ref={containerRef}>
      {/* Панель управления с обновленным стилем */}
      <div className="bg-gray-100 border-b-2 border-gray-300 p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {mode === 'master' ? 'Game Master Map' : 'Player Map'}
          </h2>
          <div className="flex gap-4">
            {mode === 'master' && (
              <>
                <button
                  onClick={() => setMapState(prev => ({ ...prev, isEditMode: !prev.isEditMode }))}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    mapState.isEditMode 
                      ? 'bg-gray-800 text-white hover:bg-gray-900' 
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  {mapState.isEditMode ? 'Exit Edit' : 'Edit Mode'}
                </button>
                <button
                  onClick={addNewHexes}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Expand Map
                </button>
                {selectedImageId && (
                  <button
                    onClick={() => { setImages(prev => prev.filter(i => i.id !== selectedImageId)); setSelectedImageId(null); }}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    Delete Image (Del)
                  </button>
                )}
              </>
            )}
            <div className="text-sm text-gray-700">
              Scale: {Math.round(scale * 100)}%
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="flex-1 bg-gray-50">
          <Stage
            ref={stageRef}
            width={canvasSize.width}
            height={canvasSize.height}
            draggable
            scaleX={scale}
            scaleY={scale}
            x={pos.x}
            y={pos.y}
            onWheel={(e) => {
              e.evt.preventDefault();
              if (e.evt.ctrlKey) {
                const scaleBy = 1.1; const stage = e.target.getStage(); if (!stage) return;
                const oldScale = stage.scaleX(); const pointer = stage.getPointerPosition(); if (!pointer) return;
                const mousePointTo = { x: (pointer.x - stage.x()) / oldScale, y: (pointer.y - stage.y()) / oldScale };
                const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
                const clamped = Math.max(0.5, Math.min(3, newScale));
                setScale(clamped);
                setPos({ x: pointer.x - mousePointTo.x * clamped, y: pointer.y - mousePointTo.y * clamped });
              } else {
                setPos(p => ({ x: p.x - e.evt.deltaX, y: p.y - e.evt.deltaY }));
              }
            }}
            onMouseDown={(e) => {
              const stage = e.target.getStage();
              const target = e.target as any;
              const isStage = target === stage;
              const isImage = target.getClassName && target.getClassName() === 'Image';
              const parent = target.getParent && target.getParent();
              const isTransformer = (target.getClassName && target.getClassName() === 'Transformer') || (parent && parent.getClassName && parent.getClassName() === 'Transformer');
              if ((isStage || (!isImage && !isTransformer)) && selectedImageId) {
                setSelectedImageId(null);
                selectedImageRef.current = null;
              }
            }}
            onTouchStart={(e) => {
              const stage = e.target.getStage();
              const target = e.target as any;
              const isStage = target === stage;
              const isImage = target.getClassName && target.getClassName() === 'Image';
              const parent = target.getParent && target.getParent();
              const isTransformer = (target.getClassName && target.getClassName() === 'Transformer') || (parent && parent.getClassName && parent.getClassName() === 'Transformer');
              if ((isStage || (!isImage && !isTransformer)) && selectedImageId) {
                setSelectedImageId(null);
                selectedImageRef.current = null;
              }
            }}
          >
            {/* Слой гексов */}
            <Layer>
              {Array.from(mapState.hexes.entries()).map(([key, hex]) => {
                // Используем Tile напрямую для создания гекса с координатами
                const gridHex = new Tile({ q: hex.q, r: hex.r });
                // Получаем пиксельные координаты через x и y свойства
                const x = gridHex.x;
                const y = gridHex.y;

                return (
                  <Group key={key}>
                    <RegularPolygon
                      x={x}
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
                      shadowColor="gold"
                    />
                    {renderHexIcon(hex, x, y)}
                    {renderHexLabel(hex, x, y)}
                  </Group>
                );
              })}
            </Layer>
            {/* Слой изображений */}
            <Layer>
              {images.map(img => (
                <KonvaImage
                  key={img.id}
                  image={img.img}
                  x={img.x}
                  y={img.y}
                  width={img.width}
                  height={img.height}
                  name="canvas-image"
                  draggable
                  onClick={(e) => { setSelectedImageId(img.id); selectedImageRef.current = e.target as any; }}
                  onTap={(e) => { setSelectedImageId(img.id); selectedImageRef.current = e.target as any; }}
                  onDragEnd={e => {
                    const { x, y } = e.target.position();
                    setImages(prev => prev.map(p => p.id === img.id ? { ...p, x, y } : p));
                  }}
                  onTransformEnd={e => {
                    const node = e.target as any;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    const newWidth = Math.max(10, node.width() * scaleX);
                    const newHeight = Math.max(10, node.height() * scaleY);
                    node.scaleX(1); node.scaleY(1);
                    setImages(prev => prev.map(p => p.id === img.id ? { ...p, width: newWidth, height: newHeight, x: node.x(), y: node.y() } : p));
                  }}
                />
              ))}
              <Transformer
                ref={transformerRef}
                rotateEnabled={false}
                enabledAnchors={["top-left","top-right","bottom-left","bottom-right"]}
                anchorSize={10}
                borderDash={[4,4]}
                keepRatio={true}
              />
            </Layer>
          </Stage>
        </div>

        {/* Боковая панель с деталями */}
        {mapState.selectedHex && (
          <HexDetailsPanel
            hex={mapState.hexes.get(mapState.selectedHex)!}
            mode={mode}
            onClose={() => setMapState(prev => ({ ...prev, selectedHex: null }))}
            isOpen={!!mapState.selectedHex}
          />
        )}
      </div>

      {/* Модальное окно редактирования */}
      {editingHex && (
        <HexEditModal
          hex={mapState.hexes.get(editingHex)!}
          onSave={(data: Partial<HexData>) => handleHexSave(editingHex, data)}
          onClose={() => setEditingHex(null)}
        />
      )}
    </div>
  );
}
