'use client';
import React, { useState } from 'react';
import { MouseCharacter } from '@/types/character';
import { generateRandomCharacter, getTotalUsedSlots, getAvailableSlots, isEncumbered } from '@/lib/characterUtils';

interface CharacterGeneratorProps {
  onAddToParty?: (character: MouseCharacter) => void;
}

export function CharacterGenerator({ onAddToParty }: CharacterGeneratorProps) {
  const [character, setCharacter] = useState<MouseCharacter | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Небольшая задержка для анимации
    setTimeout(() => {
      const newCharacter = generateRandomCharacter();
      setCharacter(newCharacter);
      setIsGenerating(false);
    }, 500);
  };

  const handleReroll = (stat: 'str' | 'dex' | 'wil') => {
    if (!character) return;

    // Перебрасываем конкретный атрибут
    const roll3d6KeepBest2 = () => {
      const rolls = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
      ];
      rolls.sort((a, b) => b - a);
      return rolls[0] + rolls[1];
    };

    setCharacter({
      ...character,
      [stat]: roll3d6KeepBest2()
    });
  };

  const handleAddToParty = () => {
    if (character && onAddToParty) {
      onAddToParty(character);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-amber-50 rounded-lg border-2 border-amber-200">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-amber-900 mb-2">🐭 Mouse Generator</h2>
        <p className="text-amber-700">Create a brave mouse adventurer for your Mausritter campaign</p>
      </div>

      <div className="text-center mb-8">
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 disabled:opacity-50 transition-colors text-lg font-medium"
        >
          {isGenerating ? '🎲 Rolling...' : '🎲 Generate Random Mouse'}
        </button>
      </div>

      {character && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Основная информация */}
          <div className="bg-white rounded-lg p-6 border border-amber-200">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">{character.name}</h3>

            {/* Атрибуты */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {(['str', 'dex', 'wil'] as const).map(stat => (
                <div key={stat} className="text-center p-3 bg-amber-50 rounded border">
                  <div className="text-lg font-bold text-amber-900 uppercase">{stat}</div>
                  <div className="text-2xl font-bold text-amber-800">{character[stat]}</div>
                  <button
                    onClick={() => handleReroll(stat)}
                    className="text-xs text-amber-600 hover:text-amber-800 mt-1"
                  >
                    Reroll
                  </button>
                </div>
              ))}
            </div>

            {/* HP и Pips */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-red-50 rounded border">
                <div className="text-sm font-medium text-red-700">Hit Protection</div>
                <div className="text-2xl font-bold text-red-800">{character.hp}/{character.maxHp}</div>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded border">
                <div className="text-sm font-medium text-yellow-700">Pips</div>
                <div className="text-2xl font-bold text-yellow-800">{character.pips}</div>
              </div>
            </div>

            {/* Предыстория */}
            <div className="mb-4 p-3 bg-blue-50 rounded border">
              <h4 className="font-bold text-blue-900 mb-2">Background</h4>
              <p className="text-blue-800 font-medium">{character.background.name}</p>
              <div className="text-sm text-blue-700 mt-2">
                <p><strong>Item A:</strong> {character.background.itemA}</p>
                <p><strong>Item B:</strong> {character.background.itemB}</p>
              </div>
            </div>

            {/* Знак рождения */}
            <div className="mb-4 p-3 bg-purple-50 rounded border">
              <h4 className="font-bold text-purple-900 mb-2">Birthsign</h4>
              <p className="text-purple-800 font-medium">{character.birthsign.sign}</p>
              <p className="text-sm text-purple-700">{character.birthsign.disposition}</p>
            </div>
          </div>

          {/* Внешность и инвентарь */}
          <div className="space-y-6">
            {/* Внешность */}
            <div className="bg-white rounded-lg p-6 border border-amber-200">
              <h4 className="font-bold text-amber-900 mb-4">Appearance</h4>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-sm font-medium text-amber-700">Coat:</span>
                  <p className="text-amber-800">{character.coat.pattern} {character.coat.color}</p>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-amber-700">Detail:</span>
                <p className="text-amber-800">{character.physicalDetail}</p>
              </div>
            </div>

            {/* Инвентарь */}
            <div className="bg-white rounded-lg p-6 border border-amber-200">
              <h4 className="font-bold text-amber-900 mb-4">Inventory</h4>

              <div className="mb-4 p-3 bg-gray-50 rounded">
                <div className="flex justify-between text-sm">
                  <span>Used Slots: {getTotalUsedSlots(character)}/10</span>
                  <span>Available: {getAvailableSlots(character)}</span>
                </div>
                {isEncumbered(character) && (
                  <p className="text-red-600 text-sm font-medium mt-1">⚠️ Encumbered!</p>
                )}
              </div>

              {/* Слоты лап */}
              <div className="mb-4">
                <h5 className="font-medium text-gray-700 mb-2">Paws (2 slots)</h5>
                <div className="grid grid-cols-2 gap-2">
                  {character.inventory.paws.map((item, index) => (
                    <div key={index} className="p-2 border border-gray-200 rounded min-h-[50px] bg-orange-50">
                      {item && (
                        <div className="text-xs">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-gray-600">
                            {item.usageDots}/{item.maxUsageDots} uses
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Слоты тела */}
              <div className="mb-4">
                <h5 className="font-medium text-gray-700 mb-2">Body (2 slots)</h5>
                <div className="grid grid-cols-2 gap-2">
                  {character.inventory.body.map((item, index) => (
                    <div key={index} className="p-2 border border-gray-200 rounded min-h-[50px] bg-blue-50">
                      {item && (
                        <div className="text-xs">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-gray-600">
                            {item.usageDots}/{item.maxUsageDots} uses
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Слоты рюкзака */}
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Pack (6 slots)</h5>
                <div className="grid grid-cols-3 gap-2">
                  {character.inventory.pack.map((item, index) => (
                    <div key={index} className="p-2 border border-gray-200 rounded min-h-[50px] bg-green-50">
                      {item && (
                        <div className="text-xs">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-gray-600">
                            {item.usageDots}/{item.maxUsageDots} uses
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Условия */}
            {character.conditions.length > 0 && (
              <div className="bg-white rounded-lg p-6 border border-red-200">
                <h4 className="font-bold text-red-900 mb-4">Conditions</h4>
                {character.conditions.map((condition, index) => (
                  <div key={index} className="p-3 bg-red-50 rounded border border-red-200 mb-2">
                    <div className="font-medium text-red-800">{condition.name}</div>
                    <div className="text-sm text-red-700">{condition.description}</div>
                    <div className="text-xs text-red-600 mt-1">
                      Clear: {condition.clearRequirement}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Кнопка добавления в партию */}
            <div className="mt-4">
              <button
                onClick={handleAddToParty}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-lg font-medium"
              >
                ➕ Add to Party
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
