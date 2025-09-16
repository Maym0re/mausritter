'use client';
import React, { useState } from 'react';
import { generateRandomCharacter } from "@/lib/characterUtils";
import { FullCharacter } from "@/types/character";
import { t } from '@/i18n';

interface CharacterGeneratorProps {
  onCancel?: () => void;
  onSave: (character: FullCharacter) => void;
}

export function CharacterGenerator({ onCancel, onSave }: CharacterGeneratorProps) {
  const [character, setCharacter] = useState<FullCharacter | null>(null);
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
      alert(t('charGen.nameAlert'));
      return;
    }
    onSave(character);
  };

  return (
    <div className="space-y-6 ext-stone-900">
      {!character ? (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🎲</div>
          <h3 className="text-xl font-medium text-stone-900 mb-4">
            {t('charGen.title')}
          </h3>
          <p className="mb-6">
            {t('charGen.subtitle')}
          </p>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-md font-medium"
          >
            {isGenerating ? t('charGen.generating') : t('charGen.generate')}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Имя персонажа */}
          <div>
            <label htmlFor="characterName" className="block text-sm font-medium text-stone-700 mb-2">
              {t('charGen.nameLabel')}
            </label>
            <input
              type="text"
              id="characterName"
              value={character.name}
              onChange={(e) => setCharacter({ ...character, name: e.target.value })}
              placeholder={t('charGen.namePlaceholder')}
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Атрибуты */}
          <div className="bg-stone-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-stone-900">{t('charGen.attributes')}</h4>
              <button
                onClick={() => handleReroll('attributes')}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                🎲 {t('charGen.reroll')}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-bold text-lg">{character.str}</div>
                <div className="text-xs">STR</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{character.dex}</div>
                <div className="text-xs">DEX</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{character.wil}</div>
                <div className="text-xs">WIL</div>
              </div>
            </div>
          </div>

          {/* Предыстория */}
          <div className="bg-stone-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-stone-900">{t('charGen.background')}</h4>
              <button
                onClick={() => handleReroll('background')}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                🎲 {t('charGen.reroll')}
              </button>
            </div>
            <div className="space-y-2">
              <div><strong>{t('charGen.profession')}</strong> {character?.background.name}</div>
              <div><strong>HP:</strong> {character.hp}</div>
              <div><strong>Pips:</strong> {character.pips}</div>
              <div><strong>{t('charGen.startItems')}</strong></div>
              <ul className="list-disc list-inside ml-4 text-sm">
	              {character.inventory.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Детали внешности */}
          <div className="bg-stone-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-stone-900">{t('charGen.appearance')}</h4>
              <button
                onClick={() => handleReroll('details')}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                🎲 {t('charGen.reroll')}
              </button>
            </div>
            <div className="space-y-2">
              <div><strong>{t('charGen.birthsign')}</strong> {character.birthsign.sign}</div>
              <div><strong>{t('charGen.coat')}</strong> {character.coat.color}, {character.coat.pattern}</div>
              <div><strong>{t('charGen.feature')}</strong> {character.physicalDetail}</div>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex justify-between pt-4">
            <div className="space-x-2">
              <button
                onClick={handleGenerate}
                className="bg-stone-600 hover:bg-stone-700 text-white px-4 py-2 rounded-md"
              >
                {t('charGen.createNew')}
              </button>
            </div>

            <div className="space-x-2">
              <button
                onClick={onCancel}
                className="bg-stone-300 hover:bg-stone-400 text-stone-700 px-4 py-2 rounded-md"
              >
                {t('charGen.cancel')}
              </button>
              <button
                onClick={handleSave}
                disabled={!character.name.trim()}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-md"
              >
                {t('charGen.create')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
