'use client';
import React from 'react';
import { HexData } from '@/types/map';

interface HexDetailsPanelProps {
  hex: HexData;
  mode: 'master' | 'player';
  onClose: () => void;
}

export function HexDetailsPanel({ hex, mode, onClose }: HexDetailsPanelProps) {
  if (!hex.isRevealed && mode === 'player') {
    return (
      <div className="w-80 bg-stone-800 text-stone-200 p-6 border-l-2 border-stone-600">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Unknown Territory</h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-200 text-xl">
            ×
          </button>
        </div>
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🌫️</div>
          <p className="text-stone-400">This area has not been explored yet...</p>
        </div>
      </div>
    );
  }

  const displayName = hex.customName || hex.settlement?.name || hex.landmark?.name || hex.hexType.name;

  return (
    <div className="w-96 bg-amber-50 border-l-2 border-amber-200 overflow-y-auto">
      <div className="p-6">
        {/* Заголовок */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">{displayName}</h3>
            <div className="flex items-center gap-2 text-sm text-amber-700">
              <div
                className="w-4 h-4 rounded border border-amber-400"
                style={{ backgroundColor: hex.hexType.color }}
              />
              <span>{hex.hexType.name}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-amber-600 hover:text-amber-800 transition-colors text-2xl"
          >
            ×
          </button>
        </div>

        {/* Основная информация */}
        <div className="space-y-6">
          {/* Ориентир */}
          {hex.landmark && (
            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-600">📍</span>
                <h4 className="font-semibold text-amber-900">Landmark</h4>
              </div>
              <h5 className="font-medium text-amber-800 mb-1">{hex.landmark.name}</h5>
              <p className="text-sm text-amber-700">{hex.landmark.description}</p>
            </div>
          )}

          {/* Деталь ориентира */}
          {hex.landmarkDetail && (
            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2">Details</h4>
              <p className="text-sm text-amber-700">{hex.landmarkDetail.description}</p>
              {hex.landmarkDetail.effect && (
                <div className="mt-2 p-2 bg-amber-100 rounded text-xs text-amber-800">
                  <strong>Effect:</strong> {hex.landmarkDetail.effect}
                </div>
              )}
            </div>
          )}

          {/* Поселение */}
          {hex.settlement && (
            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-amber-600">👥</span>
                <h4 className="font-semibold text-amber-900">Settlement</h4>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-amber-800">{hex.settlement.name}</h5>
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <span className="capitalize">{hex.settlement.size}</span>
                    <span>•</span>
                    <span>{hex.settlement.population} mice</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-600">👑</span>
                    <span className="font-medium text-sm text-amber-800">Governance</span>
                  </div>
                  <p className="text-sm text-amber-700">{hex.settlement.governance}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-600">👥</span>
                    <span className="font-medium text-sm text-amber-800">Inhabitants</span>
                  </div>
                  <p className="text-sm text-amber-700">{hex.settlement.inhabitants}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-600">💼</span>
                    <span className="font-medium text-sm text-amber-800">Industry</span>
                  </div>
                  <p className="text-sm text-amber-700">{hex.settlement.industry}</p>
                </div>

                <div>
                  <span className="font-medium text-sm text-amber-800">Notable Feature</span>
                  <p className="text-sm text-amber-700">{hex.settlement.feature}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-600">📅</span>
                    <span className="font-medium text-sm text-amber-800">Current Event</span>
                  </div>
                  <p className="text-sm text-amber-700">{hex.settlement.event}</p>
                </div>
              </div>
            </div>
          )}

          {/* Заметки мастера */}
          {hex.notes && (
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">GM Notes</h4>
              <p className="text-sm text-yellow-800 whitespace-pre-wrap">{hex.notes}</p>
            </div>
          )}

          {/* Координаты (только для мастера) */}
          {mode === 'master' && (
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-700 mb-1">Coordinates</h4>
              <p className="text-sm text-gray-600">
                Q: {hex.q}, R: {hex.r}, S: {hex.s}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
