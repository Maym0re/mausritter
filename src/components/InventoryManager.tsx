'use client';
import React, { useCallback, useState } from 'react';
import { Character, Condition, InventoryItem } from '@/types/character';
import { addItemToInventory, getAvailableSlots, getTotalUsedSlots, isEncumbered } from '@/lib/characterUtils';
import { createItemCopy, ITEM_CATALOG } from '@/lib/itemCatalog';

interface InventoryManagerProps {
  characters: Character[];
  onCharacterUpdate: (characterId: string, character: Character) => void;
}

interface DraggedItem {
  item: InventoryItem;
  sourceCharacterId: string;
  sourceSlotType: 'paws' | 'body' | 'pack';
  sourceSlotIndex: number;
}

export function InventoryManager({ characters, onCharacterUpdate }: InventoryManagerProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    characters.length > 0 ? characters[0].id : null
  );
  const [draggedItem, setDraggedItem] = useState<DraggedItem | null>(null);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [editingItem, setEditingItem] = useState<{ characterId: string; item: InventoryItem } | null>(null);

  const selectedChar = characters.find(c => c.id === selectedCharacter);

  const handleDragStart = useCallback((
    item: InventoryItem,
    characterId: string,
    slotType: 'paws' | 'body' | 'pack',
    slotIndex: number
  ) => {
    setDraggedItem({ item, sourceCharacterId: characterId, sourceSlotType: slotType, sourceSlotIndex: slotIndex });
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggedItem(null);
  }, []);

  const handleDrop = useCallback((
    targetCharacterId: string,
    targetSlotType: 'paws' | 'body' | 'pack',
    targetSlotIndex: number
  ) => {
    if (!draggedItem) return;

    const sourceChar = characters.find(c => c.id === draggedItem.sourceCharacterId);
    const targetChar = characters.find(c => c.id === targetCharacterId);

    if (!sourceChar || !targetChar) return;

    // Удаляем предмет из исходного места
    const updatedSourceChar = { ...sourceChar };
    updatedSourceChar.inventory[draggedItem.sourceSlotType][draggedItem.sourceSlotIndex] = null;

    // Проверяем, можно ли поместить предмет в целевое место
    const targetSlot = targetChar.inventory[targetSlotType][targetSlotIndex];

    // Если слот занят, меняем местами
    if (targetSlot) {
      updatedSourceChar.inventory[draggedItem.sourceSlotType][draggedItem.sourceSlotIndex] = targetSlot;
    }

    // Помещаем предмет в целевое место
    const updatedTargetChar = { ...targetChar };
    updatedTargetChar.inventory[targetSlotType][targetSlotIndex] = draggedItem.item;

    // Если предмет размером 2 слота, освобождаем/занимаем дополнительный слот
    if (draggedItem.item.size === 2) {
      const nextIndex = targetSlotIndex + 1;
      if (nextIndex < updatedTargetChar.inventory[targetSlotType].length) {
        updatedTargetChar.inventory[targetSlotType][nextIndex] = null;
      }
    }

    onCharacterUpdate(draggedItem.sourceCharacterId, updatedSourceChar);
    onCharacterUpdate(targetCharacterId, updatedTargetChar);
    setDraggedItem(null);
  }, [draggedItem, characters, onCharacterUpdate]);

  const markUsage = useCallback((characterId: string, item: InventoryItem) => {
    const character = characters.find(c => c.id === characterId);
    if (!character) return;

    const updatedChar = { ...character };
    const allSlots = [
      ...updatedChar.inventory.paws,
      ...updatedChar.inventory.body,
      ...updatedChar.inventory.pack
    ];

    const itemIndex = allSlots.findIndex(slot => slot?.id === item.id);
    if (itemIndex !== -1 && allSlots[itemIndex]) {
      const updatedItem = { ...allSlots[itemIndex]! };
      updatedItem.usage = Math.min(updatedItem.maxUsage ?? Infinity, (updatedItem.usage ?? 0) + 1);

      allSlots[itemIndex] = updatedItem;
    }

    onCharacterUpdate(characterId, updatedChar);
  }, [characters, onCharacterUpdate]);

  const repairItem = useCallback((characterId: string, item: InventoryItem) => {
    const character = characters.find(c => c.id === characterId);
    if (!character) return;

    const repairCost = Math.floor((item.value || 0) * 0.1) * (item.usage ?? 1);

    if (character.pips >= repairCost) {
      const updatedChar = { ...character };
      updatedChar.pips -= repairCost;

      const allSlots = [
        ...updatedChar.inventory.paws,
        ...updatedChar.inventory.body,
        ...updatedChar.inventory.pack
      ];

      const itemIndex = allSlots.findIndex(slot => slot?.id === item.id);
      if (itemIndex !== -1 && allSlots[itemIndex]) {
        const updatedItem = { ...allSlots[itemIndex]! };
        updatedItem.usage = 0;
        allSlots[itemIndex] = updatedItem;
      }

      onCharacterUpdate(characterId, updatedChar);
    }
  }, [characters, onCharacterUpdate]);

  const addCondition = useCallback((characterId: string, condition: Condition) => {
    const character = characters.find(c => c.id === characterId);
    if (!character) return;

    const updatedChar = { ...character };
    updatedChar.conditions.push(condition);
    onCharacterUpdate(characterId, updatedChar);
  }, [characters, onCharacterUpdate]);

  const removeCondition = useCallback((characterId: string, conditionId: string) => {
    const character = characters.find(c => c.id === characterId);
    if (!character) return;

    const updatedChar = { ...character };
    updatedChar.conditions = updatedChar.conditions.filter(c => c.id !== conditionId);
    onCharacterUpdate(characterId, updatedChar);
  }, [characters, onCharacterUpdate]);

  const handleAddItem = useCallback((templateItem: InventoryItem) => {
    if (!selectedCharacter) return;

    const character = characters.find(c => c.id === selectedCharacter);
    if (!character) return;

    const newItem = createItemCopy(templateItem);

    const newInventory = addItemToInventory(character.inventory, newItem);
    if (newInventory.success) {
      onCharacterUpdate(selectedCharacter, {
        ...character,
        inventory: newInventory.inventory
      });
      setShowAddItemModal(false);
    } else {
      alert('No space available in inventory!');
    }
  }, [selectedCharacter, characters, onCharacterUpdate]);

  if (characters.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-amber-50 rounded-lg border-2 border-amber-200">
        <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">🎒 Inventory Manager</h2>
        <p className="text-center text-amber-700">
          No characters available. Generate some mice first!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-amber-50 rounded-lg border-2 border-amber-200">
      <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">🎒 Advanced Inventory Manager</h2>

      {/* Выбор персонажа */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-amber-700 mb-2">Select Character</label>
        <select
          value={selectedCharacter || ''}
          onChange={(e) => setSelectedCharacter(e.target.value)}
          className="block w-full px-3 py-2 border border-amber-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        >
          {characters.map(char => (
            <option key={char.id} value={char.id}>
              {char.name} ({char.background.name})
            </option>
          ))}
        </select>
      </div>

      {selectedChar && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Основная информация персонажа */}
          <div className="lg:col-span-1">
            <CharacterInfo
              character={selectedChar}
              onRemoveCondition={(conditionId) => removeCondition(selectedChar.id, conditionId)}
            />
          </div>

          {/* Инвентарь */}
          <div className="lg:col-span-2">
            <InventoryGrid
              character={selectedChar}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDrop={handleDrop}
              onMarkUsage={markUsage}
              onRepairItem={repairItem}
              onEditItem={(item) => setEditingItem({ characterId: selectedChar.id, item })}
              onAddItem={handleAddItem}
            />
          </div>
        </div>
      )}

      {/* Модальное окно редактирования предмета */}
      {editingItem && (
        <ItemEditModal
          item={editingItem.item}
          onSave={(updatedItem) => {
            // Обновляем предмет в инвентаре
            const character = characters.find(c => c.id === editingItem.characterId);
            if (character) {
              const updatedChar = { ...character };
              const allSlots = [
                ...updatedChar.inventory.paws,
                ...updatedChar.inventory.body,
                ...updatedChar.inventory.pack
              ];

              const itemIndex = allSlots.findIndex(slot => slot?.id === editingItem.item.id);
              if (itemIndex !== -1) {
                allSlots[itemIndex] = updatedItem;
              }

              onCharacterUpdate(editingItem.characterId, updatedChar);
            }
            setEditingItem(null);
          }}
          onClose={() => setEditingItem(null)}
        />
      )}

      {/* Модальное окно добавления предмета */}
      {showAddItemModal && (
        <AddItemModal
          onAddItem={handleAddItem}
          onClose={() => setShowAddItemModal(false)}
        />
      )}
    </div>
  );
}

// Компонент информации о персонаже
function CharacterInfo({
  character,
  onRemoveCondition
}: {
  character: Character;
  onAddCondition?: (condition: Condition) => void;
  onRemoveCondition: (conditionId: string) => void;
}) {
  const usedSlots = getTotalUsedSlots(character);
  const availableSlots = getAvailableSlots(character);
  const encumbered = isEncumbered(character);

  return (
    <div className="bg-white rounded-lg p-4 border border-amber-200">
      <h3 className="text-xl font-bold text-amber-900 mb-4">{character.name}</h3>

      {/* Статистика инвентаря */}
      <div className="mb-4 p-3 bg-gray-50 rounded">
        <div className="text-sm space-y-1">
          <div className="flex justify-between">
            <span>Used Slots:</span>
            <span className="font-medium">{usedSlots}/10</span>
          </div>
          <div className="flex justify-between">
            <span>Conditions:</span>
            <span className="font-medium">{character.conditions.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Available:</span>
            <span className="font-medium">{availableSlots}</span>
          </div>
          {encumbered && (
            <div className="text-red-600 font-medium text-center mt-2">
              ⚠️ ENCUMBERED ⚠️
            </div>
          )}
        </div>
      </div>

      {/* Условия */}
      <div className="mb-4">
        <h4 className="font-bold text-amber-800 mb-2">Conditions</h4>
        <div className="space-y-2">
          {character.conditions.map((condition, index) => (
            <div key={index} className="p-2 bg-red-50 rounded border border-red-200">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-red-800">{condition.name}</div>
                  <div className="text-xs text-red-600">{condition.description}</div>
                </div>
                <button
                  onClick={() => onRemoveCondition(condition.id)}
                  className="text-red-500 hover:text-red-700 text-xs"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {character.conditions.length === 0 && (
            <p className="text-sm text-gray-500 italic">No conditions</p>
          )}
        </div>
      </div>

      {/* Пипсы */}
      <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
        <div className="flex justify-between items-center">
          <span className="font-medium text-yellow-800">Pips:</span>
          <span className="text-lg font-bold text-yellow-900">{character.pips}p</span>
        </div>
      </div>
    </div>
  );
}

// Компонент сетки инвентаря
function InventoryGrid({
  character,
  onDragStart,
  onDragEnd,
  onDrop,
  onMarkUsage,
  onRepairItem,
  onEditItem,
  onAddItem
}: {
  character: Character;
  onDragStart: (item: InventoryItem, characterId: string, slotType: 'paws' | 'body' | 'pack', slotIndex: number) => void;
  onDragEnd: () => void;
  onDrop: (characterId: string, slotType: 'paws' | 'body' | 'pack', slotIndex: number) => void;
  onMarkUsage: (characterId: string, item: InventoryItem) => void;
  onRepairItem: (characterId: string, item: InventoryItem) => void;
  onEditItem: (item: InventoryItem) => void;
  onAddItem: (item: InventoryItem) => void;
}) {
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 border border-amber-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-amber-900">Inventory</h3>
        <button
          onClick={() => setShowAddItemModal(true)}
          className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
        >
          ➕ Add Item
        </button>
      </div>

      {/* Слоты лап */}
      <InventorySection
        title="Paws (2 slots)"
        slots={character.inventory.paws}
        slotType="paws"
        characterId={character.id}
        backgroundColor="bg-orange-50"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        onMarkUsage={onMarkUsage}
        onRepairItem={onRepairItem}
        onEditItem={onEditItem}
      />

      {/* Слоты тела */}
      <InventorySection
        title="Body (2 slots)"
        slots={character.inventory.body}
        slotType="body"
        characterId={character.id}
        backgroundColor="bg-blue-50"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        onMarkUsage={onMarkUsage}
        onRepairItem={onRepairItem}
        onEditItem={onEditItem}
      />

      {/* Слоты рюкзака */}
      <InventorySection
        title="Pack (6 slots)"
        slots={character.inventory.pack}
        slotType="pack"
        characterId={character.id}
        backgroundColor="bg-green-50"
        gridCols="grid-cols-3"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        onMarkUsage={onMarkUsage}
        onRepairItem={onRepairItem}
        onEditItem={onEditItem}
      />

      {/* Модальное окно добавления предмета */}
      {showAddItemModal && (
        <AddItemModal
          onAddItem={onAddItem}
          onClose={() => setShowAddItemModal(false)}
        />
      )}
    </div>
  );
}

// Компонент секции инвентаря
function InventorySection({
  title,
  slots,
  slotType,
  characterId,
  backgroundColor,
  gridCols = "grid-cols-2",
  onDragStart,
  onDragEnd,
  onDrop,
  onMarkUsage,
  onRepairItem,
  onEditItem
}: {
  title: string;
  slots: (InventoryItem | null)[];
  slotType: 'paws' | 'body' | 'pack';
  characterId: string;
  backgroundColor: string;
  gridCols?: string;
  onDragStart: (item: InventoryItem, characterId: string, slotType: 'paws' | 'body' | 'pack', slotIndex: number) => void;
  onDragEnd: () => void;
  onDrop: (characterId: string, slotType: 'paws' | 'body' | 'pack', slotIndex: number) => void;
  onMarkUsage: (characterId: string, item: InventoryItem) => void;
  onRepairItem: (characterId: string, item: InventoryItem) => void;
  onEditItem: (item: InventoryItem) => void;
}) {
  return (
    <div className="mb-6">
      <h4 className="font-medium text-gray-700 mb-2">{title}</h4>
      <div className={`grid ${gridCols} gap-2`}>
        {slots.map((item, index) => (
          <InventorySlot
            key={index}
            item={item}
            slotIndex={index}
            slotType={slotType}
            characterId={characterId}
            backgroundColor={backgroundColor}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDrop={onDrop}
            onMarkUsage={onMarkUsage}
            onRepairItem={onRepairItem}
            onEditItem={onEditItem}
          />
        ))}
      </div>
    </div>
  );
}

// Компонент слота инвентаря
function InventorySlot({
  item,
  slotIndex,
  slotType,
  characterId,
  backgroundColor,
  onDragStart,
  onDragEnd,
  onDrop,
  onMarkUsage,
  onRepairItem,
  onEditItem
}: {
  item: InventoryItem | null;
  slotIndex: number;
  slotType: 'paws' | 'body' | 'pack';
  characterId: string;
  backgroundColor: string;
  onDragStart: (item: InventoryItem, characterId: string, slotType: 'paws' | 'body' | 'pack', slotIndex: number) => void;
  onDragEnd: () => void;
  onDrop: (characterId: string, slotType: 'paws' | 'body' | 'pack', slotIndex: number) => void;
  onMarkUsage: (characterId: string, item: InventoryItem) => void;
  onRepairItem: (characterId: string, item: InventoryItem) => void;
  onEditItem: (item: InventoryItem) => void;
}) {
  const [showContextMenu, setShowContextMenu] = useState(false);

  return (
    <div
      className={`p-2 border border-gray-200 rounded min-h-[80px] ${backgroundColor} relative ${
        item ? 'cursor-move' : 'cursor-pointer'
      }`}
      draggable={!!item}
      onDragStart={() => item && onDragStart(item, characterId, slotType, slotIndex)}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        onDrop(characterId, slotType, slotIndex);
      }}
      onContextMenu={(e) => {
        if (item) {
          e.preventDefault();
          setShowContextMenu(true);
        }
      }}
    >
      {item ? (
        <>
          <div className="text-xs">
            <div className="font-medium mb-1">{item.name}</div>
            <div className="text-gray-600 mb-1">
              {item.type} • Size: {item.size}
            </div>

            {/* Точки использования */}
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs">Usage:</span>
              {Array.from({ length: item.maxUsage ?? 0 }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full border ${
                    i < (item.usage ?? 0) 
                      ? 'bg-red-500 border-red-500' 
                      : 'bg-white border-gray-400'
                  }`}
                />
              ))}
            </div>

            {item.value && (
              <div className="text-xs text-gray-500">Value: {item.value}p</div>
            )}

            {item.usage >= item.maxUsage && (
              <div className="text-xs text-red-600 font-medium">DEPLETED</div>
            )}
          </div>

          {/* Контекстное меню */}
          {showContextMenu && (
            <div className="absolute top-0 right-0 bg-white border border-gray-300 rounded shadow-lg z-10">
              <button
                onClick={() => {
                  onMarkUsage(characterId, item);
                  setShowContextMenu(false);
                }}
                className="block w-full px-3 py-1 text-left text-xs hover:bg-gray-100"
              >
                Mark Usage
              </button>
              {item.usage > 0 && item.value && (
                <button
                  onClick={() => {
                    onRepairItem(characterId, item);
                    setShowContextMenu(false);
                  }}
                  className="block w-full px-3 py-1 text-left text-xs hover:bg-gray-100"
                >
                  Repair ({Math.floor(item.value * 0.1) * item.usage}p)
                </button>
              )}
              <button
                onClick={() => {
                  onEditItem(item);
                  setShowContextMenu(false);
                }}
                className="block w-full px-3 py-1 text-left text-xs hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => setShowContextMenu(false)}
                className="block w-full px-3 py-1 text-left text-xs hover:bg-gray-100 text-gray-500"
              >
                Cancel
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-xs text-gray-400 text-center pt-6">Empty slot</div>
      )}
    </div>
  );
}

// Модальное окно редактирования предмета
function ItemEditModal({
  item,
  onSave,
  onClose
}: {
  item: InventoryItem;
  onSave: (item: InventoryItem) => void;
  onClose: () => void;
}) {
  const [editedItem, setEditedItem] = useState<InventoryItem>({ ...item });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-lg font-bold mb-4">Edit Item</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={editedItem.name}
              onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              value={editedItem.type}
              onChange={(e) => setEditedItem({ ...editedItem, type: e.target.value as InventoryItem['type'] })}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value="weapon">Weapon</option>
              <option value="armor">Armor</option>
              <option value="equipment">Equipment</option>
              <option value="spell">Spell</option>
              <option value="condition">Condition</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Size</label>
            <select
              value={editedItem.size}
              onChange={(e) => setEditedItem({ ...editedItem, size: parseInt(e.target.value) as 1 | 2 })}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value={1}>1 slot</option>
              <option value={2}>2 slots</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Value (pips)</label>
            <input
              type="number"
              value={editedItem.value || 0}
              onChange={(e) => setEditedItem({ ...editedItem, value: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={editedItem.description || ''}
              onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              rows={3}
            />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <button
            onClick={() => onSave(editedItem)}
            className="flex-1 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// Модальное окно добавления предмета
function AddItemModal({
  onAddItem,
  onClose
}: {
  onAddItem: (item: InventoryItem) => void;
  onClose: () => void;
}) {
  const [selectedTemplate, setSelectedTemplate] = useState<InventoryItem | null>(null);

  const handleAdd = () => {
    if (selectedTemplate) {
      onAddItem(selectedTemplate);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-lg font-bold mb-4">Add Item to Inventory</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Select Item Template</label>
          <select
            value={selectedTemplate?.id || ''}
            onChange={(e) => {
              const itemId = e.target.value;
              const item = ITEM_CATALOG.find(i => i.id === itemId) || null;
              setSelectedTemplate(item);
            }}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="">-- Select an item --</option>
            {ITEM_CATALOG.map(item => (
              <option key={item.id} value={item.id}>
                {item.name} ({item.type})
              </option>
            ))}
          </select>
        </div>

        {selectedTemplate && (
          <div className="mb-4 p-3 bg-gray-50 rounded">
            <h4 className="font-medium text-gray-800 mb-2">Selected Template</h4>
            <div className="text-sm">
              <div className="font-medium">{selectedTemplate.name}</div>
              <div className="text-gray-600">
                Type: {selectedTemplate.type} • Size: {selectedTemplate.size}
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs">Usage:</span>
                {Array.from({ length: selectedTemplate.maxUsage }, (_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full border ${
                      i < selectedTemplate.usage 
                        ? 'bg-red-500 border-red-500' 
                        : 'bg-white border-gray-400'
                    }`}
                  />
                ))}
              </div>
              {selectedTemplate.value && (
                <div className="text-xs text-gray-500">Value: {selectedTemplate.value}p</div>
              )}
            </div>
          </div>
        )}

        <div className="flex gap-2 mt-4">
          <button
            onClick={handleAdd}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add Item
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
