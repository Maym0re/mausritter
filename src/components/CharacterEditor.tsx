'use client';
import React, { useState } from 'react';
import { FullCharacter } from "@/types/character";

interface CharacterEditorProps {
  character: FullCharacter;
  onSave: (character: FullCharacter) => void;
  onCancel: () => void;
  isMaster?: boolean;
}

export function CharacterEditor({ character, onSave, onCancel, isMaster = false }: CharacterEditorProps) {
  const [editedCharacter, setEditedCharacter] = useState<FullCharacter>({ ...character });
  const [isSaving, setIsSaving] = useState(false);

  const handleAttributeChange = (attr: 'str' | 'dex' | 'wil', value: number) => {
    setEditedCharacter(prev => ({
      ...prev,
      [attr]: Math.max(1, Math.min(20, value))
    }));
  };

  const handleHpChange = (type: 'current' | 'max', value: number) => {
    const newValue = Math.max(0, value);
    if (type === 'current') {
      setEditedCharacter(prev => ({
        ...prev,
        hp: Math.min(newValue, prev.maxHp)
      }));
    } else {
      setEditedCharacter(prev => ({
        ...prev,
        maxHp: newValue,
        hp: Math.min(prev.hp, newValue)
      }));
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(editedCharacter);
    } catch (error) {
      console.error('Ошибка сохранения персонажа:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-stone-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-stone-900">
                {isMaster ? 'Редактирование персонажа' : 'Мой персонаж'}
              </h2>
              <p className="text-stone-600">
                Игрок: {character.player?.name || character.player?.email}
              </p>
            </div>
            <button
              onClick={onCancel}
              className="text-stone-500 hover:text-stone-700"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Основная информация */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Имя персонажа
              </label>
              <input
                type="text"
                value={editedCharacter.name}
                onChange={(e) => setEditedCharacter(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Уровень
              </label>
              <input
                type="number"
                value={editedCharacter.level}
                onChange={(e) => setEditedCharacter(prev => ({ ...prev, level: parseInt(e.target.value) || 1 }))}
                min="1"
                max="20"
                className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Характеристики */}
          <div className="bg-stone-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-stone-900 mb-4">Характеристики</h3>
            <div className="grid grid-cols-3 gap-4">
              {(['str', 'dex', 'wil'] as const).map((attr) => (
                <div key={attr} className="text-center">
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {attr === 'str' ? 'Сила' : attr === 'dex' ? 'Ловкость' : 'Воля'}
                  </label>
                  <input
                    type="number"
                    value={editedCharacter[attr]}
                    onChange={(e) => handleAttributeChange(attr, parseInt(e.target.value) || 10)}
                    min="1"
                    max="20"
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Здоровье и характеристики */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Текущее HP
              </label>
              <input
                type="number"
                value={editedCharacter.hp}
                onChange={(e) => handleHpChange('current', parseInt(e.target.value) || 0)}
                min="0"
                max={editedCharacter.maxHp}
                className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Максимальное HP
              </label>
              <input
                type="number"
                value={editedCharacter.maxHp}
                onChange={(e) => handleHpChange('max', parseInt(e.target.value) || 6)}
                min="1"
                className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Опыт
              </label>
              <input
                type="number"
                value={editedCharacter.xp}
                onChange={(e) => setEditedCharacter(prev => ({ ...prev, xp: parseInt(e.target.value) || 0 }))}
                min="0"
                className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Пипсы
              </label>
              <input
                type="number"
                value={editedCharacter.pips}
                onChange={(e) => setEditedCharacter(prev => ({ ...prev, pips: parseInt(e.target.value) || 0 }))}
                min="0"
                className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Заметки */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Заметки
            </label>
            <textarea
              value={editedCharacter.notes || ''}
              onChange={(e) => setEditedCharacter(prev => ({ ...prev, notes: e.target.value }))}
              rows={3}
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Заметки о персонаже..."
            />
          </div>

          {/* Детали персонажа (только для просмотра) */}
          <div className="bg-stone-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-stone-900 mb-4">Детали персонажа</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Происхождение:</strong> {editedCharacter.background?.name || 'Не указано'}
              </div>
              <div>
                <strong>Знак рождения:</strong> {editedCharacter.birthsign?.sign || 'Не указано'}
              </div>
              <div>
                <strong>Цвет шерсти:</strong> {editedCharacter.coat?.color || 'Не указано'}
              </div>
              <div>
                <strong>Особенность:</strong> {editedCharacter.physicalDetail || 'Не указано'}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-stone-200 flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-stone-300 rounded-md text-stone-700 hover:bg-stone-50"
          >
            Отмена
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving || !editedCharacter.name.trim()}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:bg-stone-300"
          >
            {isSaving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </div>
    </div>
  );
}
