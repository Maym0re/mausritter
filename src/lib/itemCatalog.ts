import { BASIC_EQUIPMENT, InventoryItemLite, WEAPONS } from '@/types/character';

// Расширенный список предметов для добавления
export const ITEM_CATALOG: InventoryItemLite[] = [
  // Базовое снаряжение
  ...BASIC_EQUIPMENT,

  // Оружие
  ...WEAPONS,

  // Инструменты
  {
    name: 'Rope',
    type: 'equipment',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Strong rope for climbing',
    value: 10,
	  slotType: 'PACK',
	  slotIndex: 0
  },
  {
    name: 'Lantern',
    type: 'equipment',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Provides light for 6 Turns per usage dot',
    value: 50,
	  slotType: 'PACK',
	  slotIndex: 0
  },
  {
    name: 'Healing Potion',
    type: 'equipment',
    size: 1,
    usage: 0,
    maxUsage: 1,
    description: 'Restores d6+2 HP when consumed',
    value: 100,
	  slotType: 'PACK',
	  slotIndex: 0,
  },
  {
    name: 'Lockpicks',
    type: 'equipment',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Used to pick locks',
    value: 100,
	  slotType: 'PACK',
	  slotIndex: 0
  },
  {
    name: 'Grappling Hook',
    type: 'equipment',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Hook for climbing or swinging',
    value: 50,
	  slotType: 'PACK',
	  slotIndex: 0
  },

  // Броня
  {
    name: 'Light Armor',
    type: 'armor',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Prevents 1 damage, worn in off paw and body slot',
    value: 150,
	  slotType: 'BODY',
	  slotIndex: 0
  },
  {
    name: 'Heavy Armor',
    type: 'armor',
    size: 2,
    usage: 0,
    maxUsage: 3,
    description: 'Prevents 1 damage, worn in two body slots',
    value: 500,
	  slotType: 'BODY',
	  slotIndex: 0
  },

  // Заклинания
  {
    name: 'Heal',
    type: 'spell',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Heal [SUM] STR damage and remove Injured Condition',
    value: 300,
	  slotType: 'PACK',
	  slotIndex: 0
  },
  {
    name: 'Light',
    type: 'spell',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Create light as bright as torch for [SUM] turns',
    value: 200,
	  slotType: 'PACK',
	  slotIndex: 0
  },
  {
    name: 'Magic Missile',
    type: 'spell',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Deal [SUM] + [DICE] damage to creature within sight',
    value: 400,
	  slotType: 'PACK',
	  slotIndex: 0
  }
];

// Функция для создания копии предмета с уникальным ID
export function createItemCopy(templateItem: InventoryItemLite): InventoryItemLite {
  return {
    ...templateItem,
  };
}
