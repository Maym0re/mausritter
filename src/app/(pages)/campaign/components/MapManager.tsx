'use client';

import { useState } from 'react';

interface MapManagerProps {
  campaignId: string;
}

export function MapManager({ campaignId }: MapManagerProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleCreateMap = async () => {
    setIsCreating(true);
    try {
      const response = await fetch('/api/maps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaignId,
          size: 5
        }),
      });

      if (response.ok) {
        window.location.reload();
      } else {
        const error = await response.json();
        console.error('Map creation error:', error);
        alert(`Ошибка создания карты: ${error.error || 'Неизвестная ошибка'}`);
      }
    } catch (error) {
      console.error('Failed to create map:', error);
      alert('Ошибка создания карты');
    } finally {
      setIsCreating(false);
      setShowOptions(false);
    }
  };

  const handleGenerateRandomMap = async () => {
    setIsCreating(true);
    try {
      // Create map first
      const mapResponse = await fetch('/api/maps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaignId,
          size: 5
        }),
      });

      if (mapResponse.ok) {
        const mapData = await mapResponse.json();

        // Generate random cells for 5x5 hex map
        const promises = [];
        for (let q = -2; q <= 2; q++) {
          for (let r = Math.max(-2, -q-2); r <= Math.min(2, -q+2); r++) {
            const s = -q - r;

            // Center hex (0,0,0) is always the starting settlement
            if (q === 0 && r === 0) {
              promises.push(
                fetch('/api/maps/cells', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    hexMapId: mapData.id,
                    q,
                    r,
                    s,
                    hexTypeId: 'countryside',
                    settlementId: 'acorndale',
                    isRevealed: true,
                    customName: 'Acorndale',
                    notes: 'Starting settlement'
                  }),
                })
              );
            } else {
              // Other hexes are random
              promises.push(
                fetch('/api/maps/cells', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    hexMapId: mapData.id,
                    q,
                    r,
                    s,
                    hexTypeId: getRandomHexType(),
                    isRevealed: false
                  }),
                })
              );
            }
          }
        }

        await Promise.all(promises);
        window.location.reload();
      } else {
        const error = await mapResponse.json();
        console.error('Map creation error:', error);
        alert(`Ошибка создания карты: ${error.error || 'Неизвестная ошибка'}`);
      }
    } catch (error) {
      console.error('Failed to generate random map:', error);
      alert('Ошибка генерации карты');
    } finally {
      setIsCreating(false);
      setShowOptions(false);
    }
  };

  const getRandomHexType = () => {
    const types = ['countryside', 'forest', 'river', 'human_town'];
    return types[Math.floor(Math.random() * types.length)];
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        disabled={isCreating}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
      >
        {isCreating ? 'Создание...' : 'Управление картой'}
      </button>

      {showOptions && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            <button
              onClick={handleCreateMap}
              disabled={isCreating}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Создать пустую карту
            </button>
            <button
              onClick={handleGenerateRandomMap}
              disabled={isCreating}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Генерировать случайную карту
            </button>
          </div>
        </div>
      )}

      {/* Close menu on outside click */}
      {showOptions && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowOptions(false)}
        />
      )}
    </div>
  );
}
