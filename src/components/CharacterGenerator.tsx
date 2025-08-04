'use client';
import React, { useState } from 'react';
import { Character } from '@/types/character';
import { generateRandomCharacter } from "@/lib/characterUtils";

interface CharacterGeneratorProps {
  onCancel?: () => void;
  onSave: (character: Character) => void;
}

export function CharacterGenerator({ onCancel, onSave }: CharacterGeneratorProps) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newCharacter = generateRandomCharacter();
      setCharacter(newCharacter);
      setIsGenerating(false);
    }, 500);
  };

  const handleReroll = (type: 'attributes' | 'background' | 'details') => {
    if (!character) return;

    const generateCharacter = generateRandomCharacter();

    const updatedCharacter = { ...character };

    if (type === 'attributes') {
      updatedCharacter.str = generateCharacter.str;
      updatedCharacter.dex = generateCharacter.dex;
      updatedCharacter.wil = generateCharacter.wil;
    } else if (type === 'background') {
      updatedCharacter.hp = generateCharacter.hp;
      updatedCharacter.pips = generateCharacter.pips;
      updatedCharacter.background = generateCharacter.background;
      updatedCharacter.inventory = generateCharacter.inventory;
    } else if (type === 'details') {
      updatedCharacter.birthsign = generateCharacter.birthsign;
      updatedCharacter.coat = generateCharacter.coat;
      updatedCharacter.physicalDetail = generateCharacter.physicalDetail;
    }

    setCharacter(updatedCharacter);
  };

  const handleSave = () => {
    if (!character || !character.name.trim()) {
      alert('Пожалуйста, введите имя персонажа');
      return;
    }
    onSave(character);
  };

  return (
    <div className="space-y-6">
      {!character ? (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🎲</div>
          <h3 className="text-xl font-medium text-stone-900 mb-4">
            Генератор персонажей Mausritter
          </h3>
          <p className="text-stone-600 mb-6">
            Создайте случайного мышонка-авантюриста по правилам игры
          </p>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-md font-medium"
          >
            {isGenerating ? 'Генерация...' : 'Сгенерировать персонажа'}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Имя персонажа */}
          <div>
            <label htmlFor="characterName" className="block text-sm font-medium text-stone-700 mb-2">
              Имя персонажа *
            </label>
            <input
              type="text"
              id="characterName"
              value={character.name}
              onChange={(e) => setCharacter({ ...character, name: e.target.value })}
              placeholder="Введите имя для вашего мышонка"
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Атрибуты */}
          <div className="bg-stone-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-stone-900">Атрибуты</h4>
              <button
                onClick={() => handleReroll('attributes')}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                🎲 Перебросить
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-bold text-lg">{character.str}</div>
                <div className="text-xs text-stone-600">STR</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{character.dex}</div>
                <div className="text-xs text-stone-600">DEX</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{character.wil}</div>
                <div className="text-xs text-stone-600">WIL</div>
              </div>
            </div>
          </div>

          {/* Предыстория */}
          <div className="bg-stone-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-stone-900">Предыстория</h4>
              <button
                onClick={() => handleReroll('background')}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                🎲 Перебросить
              </button>
            </div>
            <div className="space-y-2">
              <div><strong>Профессия:</strong> {character?.background.name}</div>
              <div><strong>HP:</strong> {character.hp}</div>
              <div><strong>Pips:</strong> {character.pips}</div>
              <div><strong>Стартовые предметы:</strong></div>
              <ul className="list-disc list-inside ml-4 text-sm">
                {Object.values(character.inventory).flatMap((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Детали внешности */}
          <div className="bg-stone-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-stone-900">Внешность</h4>
              <button
                onClick={() => handleReroll('details')}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                🎲 Перебросить
              </button>
            </div>
            <div className="space-y-2">
              <div><strong>Знак рождения:</strong> {character.birthsign.sign}</div>
              <div><strong>Шерсть:</strong> {character.coat.color}, {character.coat.pattern}</div>
              <div><strong>Особенность:</strong> {character.physicalDetail}</div>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex justify-between pt-4">
            <div className="space-x-2">
              <button
                onClick={handleGenerate}
                className="bg-stone-600 hover:bg-stone-700 text-white px-4 py-2 rounded-md"
              >
                Создать нового
              </button>
            </div>

            <div className="space-x-2">
              <button
                onClick={onCancel}
                className="bg-stone-300 hover:bg-stone-400 text-stone-700 px-4 py-2 rounded-md"
              >
                Отмена
              </button>
              <button
                onClick={handleSave}
                disabled={!character.name.trim()}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-md"
              >
                Создать персонажа
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
