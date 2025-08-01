'use client';
import React from 'react';
import { HexData } from '@/types/map';
import { Sidebar } from '@/components/ui/Sidebar';

interface HexDetailsPanelProps {
  hex: HexData;
  mode: 'master' | 'player';
  onClose: () => void;
  isOpen: boolean;
}

export function HexDetailsPanel({ hex, mode, onClose, isOpen }: HexDetailsPanelProps) {
  if (!hex.isRevealed && mode === 'player') {
    return (
      <Sidebar
        isOpen={isOpen}
        onClose={onClose}
        title="Неизведанная территория"
        className="bg-stone-800 text-stone-200 border-stone-600"
      >
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🌫️</div>
          <p className="text-stone-400">Эта область ещё не исследована...</p>
        </div>
      </Sidebar>
    );
  }

  const displayName = hex.customName || hex.settlement?.name || hex.landmark?.name || hex.hexType.name;

  return (
    <Sidebar
      isOpen={isOpen}
      onClose={onClose}
      title={displayName}
      className="bg-amber-50 border-amber-200"
    >
      {/* Тип гекса */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-6 h-6 rounded border-2 border-amber-600"
            style={{ backgroundColor: hex.hexType.color }}
          />
          <span className="text-lg font-medium text-amber-900">{hex.hexType.name}</span>
        </div>
        <p className="text-sm text-amber-700">{hex.hexType.description}</p>
      </div>

      {/* Поселение */}
      {hex.settlement && (
        <div className="mb-6 p-4 bg-amber-100 rounded-lg border border-amber-200">
          <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
            🏘️ Поселение: {hex.settlement.name}
          </h4>
          <div className="text-sm text-amber-800 space-y-1">
            <p><span className="font-medium">Размер:</span> {hex.settlement.size}</p>
            <p><span className="font-medium">Население:</span> {hex.settlement.population} мышей</p>
            <p><span className="font-medium">Управление:</span> {hex.settlement.governance}</p>
            {hex.settlement.feature && (
              <p><span className="font-medium">Особенность:</span> {hex.settlement.feature}</p>
            )}
            {hex.settlement.industry && (
              <p><span className="font-medium">Промышленность:</span> {hex.settlement.industry}</p>
            )}
            {hex.settlement.inhabitants && (
              <p><span className="font-medium">Жители:</span> {hex.settlement.inhabitants}</p>
            )}
            {hex.settlement.event && (
              <p><span className="font-medium">События:</span> {hex.settlement.event}</p>
            )}
          </div>
        </div>
      )}

      {/* Достопримечательность */}
      {hex.landmark && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            🗺️ {hex.landmark.name}
          </h4>
          <p className="text-sm text-blue-800 mb-2">{hex.landmark.description}</p>
          {hex.landmarkDetail && (
            <p className="text-xs text-blue-700 italic">Детали: {hex.landmarkDetail.description}</p>
          )}
          {hex.landmarkDetail?.effect && (
            <p className="text-xs text-blue-600 font-medium">Эффект: {hex.landmarkDetail.effect}</p>
          )}
        </div>
      )}

      {/* Координаты */}
      <div className="mb-4 p-3 bg-gray-100 rounded-lg">
        <h4 className="font-bold text-gray-900 mb-1">Координаты</h4>
        <p className="text-sm text-gray-700">Q: {hex.q}, R: {hex.r}, S: {hex.s}</p>
      </div>

      {/* Заметки */}
      {hex.notes && (
        <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <h4 className="font-bold text-yellow-900 mb-2">📝 Заметки</h4>
          <p className="text-sm text-yellow-800 whitespace-pre-wrap">{hex.notes}</p>
        </div>
      )}

      {/* Статус для мастера */}
      {mode === 'master' && (
        <div className="mt-6 p-3 bg-purple-50 rounded-lg border border-purple-200">
          <h4 className="font-bold text-purple-900 mb-2">🎭 Информация для мастера</h4>
          <p className="text-sm text-purple-800">
            Статус: {hex.isRevealed ? '✅ Открыт для игроков' : '❌ Скрыт от игроков'}
          </p>
        </div>
      )}
    </Sidebar>
  );
}
