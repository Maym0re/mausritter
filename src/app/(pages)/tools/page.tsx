'use client';
import React, { useState } from 'react';
import { CharacterGenerator } from '@/components/CharacterGenerator';
import { TimeTracker } from '@/components/TimeTracker';
import { InventoryManager } from '@/components/InventoryManager';
import { Character } from "@prisma/client";

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<'characters' | 'time' | 'inventory'>('characters');
  const [characters, setCharacters] = useState<Character[]>([]);

  const handleCharacterUpdate = (characterId: string, updatedCharacter: Character) => {
    setCharacters(prev =>
      prev.map(char => char.id === characterId ? updatedCharacter : char)
    );
  };

  const addCharacterToParty = (character: Character) => {
    setCharacters(prev => [...prev, character]);
  };

  return (
    <div className="min-h-screen bg-stone-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">Mausritter Tools</h1>
          <p className="text-lg text-amber-700">Digital tools for brave mouse adventurers</p>
        </div>

        {/* Навигация */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 border-2 border-amber-200">
            <button
              onClick={() => setActiveTab('characters')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'characters'
                  ? 'bg-amber-600 text-white'
                  : 'text-amber-700 hover:bg-amber-50'
              }`}
            >
              🐭 Character Generator
            </button>
            <button
              onClick={() => setActiveTab('time')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'time'
                  ? 'bg-amber-600 text-white'
                  : 'text-amber-700 hover:bg-amber-50'
              }`}
            >
              ⏰ Time & Travel
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'inventory'
                  ? 'bg-amber-600 text-white'
                  : 'text-amber-700 hover:bg-amber-50'
              }`}
            >
              🎒 Inventory Manager
            </button>
          </div>
        </div>

        {/* Контент */}
        <div className="mb-8">
          {activeTab === 'characters' && (
            <div>
              <CharacterGenerator onSave={addCharacterToParty} />

              {/* Партия */}
              {characters.length > 0 && (
                <div className="mt-8 max-w-4xl mx-auto p-6 bg-white rounded-lg border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">🎭 Current Party</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {characters.map(character => (
                      <div key={character.id} className="p-4 border border-amber-200 rounded-lg bg-amber-50">
                        <h4 className="font-bold text-amber-900 mb-2">{character.name}</h4>
                        <div className="text-sm text-amber-800">
                          <p><strong>Background:</strong> {character.background?.name}</p>
                          <p><strong>HP:</strong> {character.hp}/{character.maxHp}</p>
                          <p><strong>Attributes:</strong> STR {character.str} | DEX {character.dex} | WIL {character.wil}</p>
                          <p><strong>Pips:</strong> {character.pips}</p>
                          {character.conditions.length > 0 && (
                            <p className="text-red-600 text-xs mt-1">
                              <strong>Conditions:</strong> {character.conditions.map(c => c.name).join(', ')}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'time' && (
            <TimeTracker
              characters={characters}
              onCharacterUpdate={handleCharacterUpdate}
            />
          )}

          {activeTab === 'inventory' && (
            <InventoryManager characters={characters} onCharacterUpdate={handleCharacterUpdate} />
          )}
        </div>

        {/* Справочная информация */}
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg border border-stone-200">
          <h3 className="text-xl font-bold text-stone-900 mb-4">📚 Quick Reference</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Атрибуты */}
            <div>
              <h4 className="font-bold text-stone-800 mb-2">Attributes</h4>
              <ul className="text-sm text-stone-700 space-y-1">
                <li><strong>STR:</strong> Physical strength and resilience</li>
                <li><strong>DEX:</strong> Speed and agility</li>
                <li><strong>WIL:</strong> Strength of will and charisma</li>
              </ul>
            </div>

            {/* Время */}
            <div>
              <h4 className="font-bold text-stone-800 mb-2">Time Scales</h4>
              <ul className="text-sm text-stone-700 space-y-1">
                <li><strong>Round:</strong> Combat (~1 minute)</li>
                <li><strong>Turn:</strong> Exploration (~10 minutes)</li>
                <li><strong>Watch:</strong> Travel (~6 hours)</li>
                <li><strong>Day:</strong> 4 Watches</li>
              </ul>
            </div>

            {/* Инвентарь */}
            <div>
              <h4 className="font-bold text-stone-800 mb-2">Inventory</h4>
              <ul className="text-sm text-stone-700 space-y-1">
                <li><strong>Paws:</strong> 2 slots (carried)</li>
                <li><strong>Body:</strong> 2 slots (worn)</li>
                <li><strong>Pack:</strong> 6 slots (stored)</li>
                <li><strong>Total:</strong> 10 slots + conditions</li>
              </ul>
            </div>

            {/* Отдых */}
            <div>
              <h4 className="font-bold text-stone-800 mb-2">Rest Types</h4>
              <ul className="text-sm text-stone-700 space-y-1">
                <li><strong>Short:</strong> 1 Turn, d6+1 HP</li>
                <li><strong>Long:</strong> 1 Watch, all HP</li>
                <li><strong>Full:</strong> 1 Week, full recovery</li>
              </ul>
            </div>

            {/* Состояния */}
            <div>
              <h4 className="font-bold text-stone-800 mb-2">Common Conditions</h4>
              <ul className="text-sm text-stone-700 space-y-1">
                <li><strong>Exhausted:</strong> No running, disadvantage</li>
                <li><strong>Frightened:</strong> WIL save to approach fear</li>
                <li><strong>Hungry:</strong> No food for a day</li>
                <li><strong>Injured:</strong> Incapacitated until helped</li>
              </ul>
            </div>

            {/* Погода */}
            <div>
              <h4 className="font-bold text-stone-800 mb-2">Weather Effects</h4>
              <ul className="text-sm text-stone-700 space-y-1">
                <li><strong>Poor Conditions:</strong> STR save or Exhausted</li>
                <li><strong>Spring:</strong> Rain storms, drizzle</li>
                <li><strong>Summer:</strong> Thunder storms, very hot</li>
                <li><strong>Autumn:</strong> Wild winds, heavy rain</li>
                <li><strong>Winter:</strong> Snow storms, bitter cold</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
