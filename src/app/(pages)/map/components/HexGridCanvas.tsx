'use client';
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Stage, Layer, Group, RegularPolygon, Text, Circle } from "react-konva";
import { defineHex, Grid, Orientation, spiral } from "honeycomb-grid";
import { HexData, MapState, HEX_TYPES } from "@/types/map";
import { hexKey, getRandomHexType, getRandomLandmark, getRandomLandmarkDetail, generateSettlement, getNeighborCoords } from "@/lib/mapUtils";
import { HexEditModal } from "./HexEditModal";
import { HexDetailsPanel } from "./HexDetailsPanel";

interface HexGridCanvasProps {
  mode: 'master' | 'player';
}

export function HexGridCanvas({ mode }: HexGridCanvasProps) {
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

  // Состояние для размеров canvas
  const [canvasSize, setCanvasSize] = useState({ width: 1000, height: 700 });

  const radius = 35;
  const mapRadius = 2;

  // Хук для отслеживания размеров окна
  useEffect(() => {
    const updateCanvasSize = () => {
      // Получаем размеры viewport
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Вычитаем примерную высоту хедера/навигации (если есть)
      const headerHeight = 120; // Примерная высота верхней панели с кнопками
      const availableHeight = height - headerHeight;

      const newWidth = width;
      const newHeight = Math.max(availableHeight, 400); // Минимальная высота 400px

      setCanvasSize({
        width: newWidth,
        height: newHeight
      });

      // Обновляем начальную позицию для центрирования карты
      setPos({
        x: newWidth / 2,
        y: newHeight / 2
      });
    };

    // Устанавливаем начальные размеры
    updateCanvasSize();

    // Слушаем изменения размера окна
    window.addEventListener('resize', updateCanvasSize);

    // Очищаем слушатель при размонтировании
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // Мемоизируем создание Tile и grid чтобы избежать бесконечного цикла
  const { Tile, grid } = useMemo(() => {
    const Tile = defineHex({
      dimensions: radius,
      orientation: Orientation.FLAT, // плоская сторона вверх
    });

    const grid = new Grid(Tile, spiral({ radius: mapRadius }));

    return { Tile, grid };
  }, [radius, mapRadius]);

  // Инициализация карты
  useEffect(() => {
    const initialHexes = new Map<string, HexData>();

    grid.forEach((hex) => {
      const { q, r, s } = hex;
      const key = hexKey(q, r);

      // Центральный гекс всегда поселение
      if (q === 0 && r === 0) {
        const hexType = HEX_TYPES.find(t => t.id === 'countryside')!;
        initialHexes.set(key, {
          q, r, s,
          hexType,
          settlement: generateSettlement(),
          isRevealed: true,
          notes: "Starting settlement",
          customName: "Acorndale"
        });
      } else {
        // Генерируем случайный контент для остальных гексов
        const hexType = getRandomHexType();
        const landmark = getRandomLandmark(hexType.id);
        const landmarkDetail = getRandomLandmarkDetail();

        initialHexes.set(key, {
          q, r, s,
          hexType,
          landmark,
          landmarkDetail,
          settlement: Math.random() < 0.3 ? generateSettlement() : undefined,
          isRevealed: mode === 'master',
          notes: ""
        });
      }
    });

    setMapState(prev => ({ ...prev, hexes: initialHexes }));
  }, [mode, grid]); // теперь grid стабильный

  const handleHexClick = useCallback((hexKey: string) => {
    if (mode === 'master') {
      if (mapState.isEditMode) {
        setEditingHex(hexKey);
      } else {
        // Переключаем видимость для игроков
        setMapState(prev => {
          const newHexes = new Map(prev.hexes);
          const hex = newHexes.get(hexKey);
          if (hex) {
            newHexes.set(hexKey, { ...hex, isRevealed: !hex.isRevealed });
          }
          return { ...prev, hexes: newHexes };
        });
      }
    }

    setMapState(prev => ({ ...prev, selectedHex: hexKey }));
  }, [mode, mapState.isEditMode]);

  const handleHexSave = useCallback((hexKey: string, hexData: Partial<HexData>) => {
    setMapState(prev => {
      const newHexes = new Map(prev.hexes);
      const existing = newHexes.get(hexKey);
      if (existing) {
        newHexes.set(hexKey, { ...existing, ...hexData });
      }
      return { ...prev, hexes: newHexes };
    });
    setEditingHex(null);
  }, []);

  const addNewHexes = useCallback(() => {
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

      // Добавляем новые гексы
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

      return { ...prev, hexes: newHexes };
    });
  }, [mode]);

  const getHexColor = (hex: HexData) => {
    if (!hex.isRevealed && mode === 'player') {
      return '#2a2a2a'; // Туман войны
    }
    return hex.hexType.color;
  };

  const getHexStroke = (hexKey: string, hex: HexData) => {
    if (mapState.selectedHex === hexKey) return '#FFD700';
    if (hoveredHex === hexKey) return '#FFA500';
    if (!hex.isRevealed && mode === 'player') return '#404040';
    return '#8B4513';
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
        y={y - 6}
        text={label}
        fontSize={10}
        fill="#2F4F4F"
        fontWeight="bold"
        fontFamily="serif"
      />
    );
  };

  const renderHexIcon = (hex: HexData, x: number, y: number) => {
    if (!hex.isRevealed && mode === 'player') return null;

    if (hex.settlement) {
      // Рисуем домик для поселений
      return (
        <Group>
          <RegularPolygon
            x={x}
            y={y - 10}
            sides={4}
            radius={8}
            fill="#8B4513"
            rotation={45}
          />
          <RegularPolygon
            x={x}
            y={y - 18}
            sides={3}
            radius={6}
            fill="#CD853F"
          />
        </Group>
      );
    }

    if (hex.landmark) {
      // Простая иконка для ориентиров
      return (
        <Circle
          x={x}
          y={y - 8}
          radius={4}
          fill="#4169E1"
          stroke="#000"
          strokeWidth={1}
        />
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col h-full">
      {/* Панель управления */}
      <div className="bg-amber-50 border-b-2 border-amber-200 p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-amber-900">
            {mode === 'master' ? 'Game Master Map' : 'Player Map'}
          </h2>
          <div className="flex gap-4">
            {mode === 'master' && (
              <>
                <button
                  onClick={() => setMapState(prev => ({ ...prev, isEditMode: !prev.isEditMode }))}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    mapState.isEditMode 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-amber-600 text-white hover:bg-amber-700'
                  }`}
                >
                  {mapState.isEditMode ? 'Exit Edit' : 'Edit Mode'}
                </button>
                <button
                  onClick={addNewHexes}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Expand Map
                </button>
              </>
            )}
            <div className="text-sm text-amber-700">
              Scale: {Math.round(scale * 100)}%
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Основная карта */}
        <div className="flex-1 bg-green-50">
          <Stage
            width={canvasSize.width}
            height={canvasSize.height}
            draggable
            scaleX={scale}
            scaleY={scale}
            x={pos.x}
            y={pos.y}
            onWheel={(e) => {
              e.evt.preventDefault();

              // Если нажат Ctrl - это жест зума
              if (e.evt.ctrlKey) {
                const scaleBy = 1.1;
                const stage = e.target.getStage();
                if (!stage) return;

                const oldScale = stage.scaleX();
                const pointer = stage.getPointerPosition();
                if (!pointer) return;

                const mousePointTo = {
                  x: (pointer.x - stage.x()) / oldScale,
                  y: (pointer.y - stage.y()) / oldScale,
                };

                // Инвертируем направление зума для правильного поведения на тачпаде
                const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
                const clampedScale = Math.max(0.5, Math.min(3, newScale));

                setScale(clampedScale);
                setPos({
                  x: pointer.x - mousePointTo.x * clampedScale,
                  y: pointer.y - mousePointTo.y * clampedScale,
                });
              } else {
                // Обычный скролл - панорамирование карты
                setPos(prevPos => ({
                  x: prevPos.x - e.evt.deltaX,
                  y: prevPos.y - e.evt.deltaY,
                }));
              }
            }}
          >
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