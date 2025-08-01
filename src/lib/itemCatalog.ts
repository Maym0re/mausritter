import { InventoryItem, BASIC_EQUIPMENT, WEAPONS } from '@/types/character';

// Расширенный список предметов для добавления
export const ITEM_CATALOG: InventoryItem[] = [
  // Базовое снаряжение
  ...BASIC_EQUIPMENT,

  // Оружие
  ...WEAPONS,

  // Инструменты
  {
    id: 'rope',
    name: 'Rope',
    type: 'equipment',
    size: 1,
    usageDots: 0,
    maxUsageDots: 3,
    description: 'Strong rope for climbing',
    value: 10
  },
  {
    id: 'lantern',
    name: 'Lantern',
    type: 'equipment',
    size: 1,
    usageDots: 0,
    maxUsageDots: 3,
    description: 'Provides light for 6 Turns per usage dot',
    value: 50
  },
  {
    id: 'healing_potion',
    name: 'Healing Potion',
    type: 'equipment',
    size: 1,
    usageDots: 0,
    maxUsageDots: 1,
    description: 'Restores d6+2 HP when consumed',
    value: 100
  },
  {
    id: 'lockpicks',
    name: 'Lockpicks',
    type: 'equipment',
    size: 1,
    usageDots: 0,
    maxUsageDots: 3,
    description: 'Used to pick locks',
    value: 100
  },
  {
    id: 'grappling_hook',
    name: 'Grappling Hook',
    type: 'equipment',
    size: 1,
    usageDots: 0,
    maxUsageDots: 3,
    description: 'Hook for climbing or swinging',
    value: 50
  },

  // Броня
  {
    id: 'light_armor',
    name: 'Light Armor',
    type: 'armor',
    size: 1,
    usageDots: 0,
    maxUsageDots: 3,
    description: 'Prevents 1 damage, worn in off paw and body slot',
    value: 150
  },
  {
    id: 'heavy_armor',
    name: 'Heavy Armor',
    type: 'armor',
    size: 2,
    usageDots: 0,
    maxUsageDots: 3,
    description: 'Prevents 1 damage, worn in two body slots',
    value: 500
  },

  // Заклинания
  {
    id: 'heal_spell',
    name: 'Heal',
    type: 'spell',
    size: 1,
    usageDots: 0,
    maxUsageDots: 3,
    description: 'Heal [SUM] STR damage and remove Injured Condition',
    value: 300
  },
  {
    id: 'light_spell',
    name: 'Light',
    type: 'spell',
    size: 1,
    usageDots: 0,
    maxUsageDots: 3,
    description: 'Create light as bright as torch for [SUM] turns',
    value: 200
  },
  {
    id: 'magic_missile_spell',
    name: 'Magic Missile',
    type: 'spell',
    size: 1,
    usageDots: 0,
    maxUsageDots: 3,
    description: 'Deal [SUM] + [DICE] damage to creature within sight',
    value: 400
  }
];

// Функция для создания копии предмета с уникальным ID
export function createItemCopy(templateItem: InventoryItem): InventoryItem {
  return {
    ...templateItem,
    id: Math.random().toString(36).substr(2, 9)
  };
}
