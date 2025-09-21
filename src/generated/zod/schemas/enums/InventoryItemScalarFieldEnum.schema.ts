import { z } from 'zod';

export const InventoryItemScalarFieldEnumSchema = z.enum(['id', 'characterId', 'name', 'type', 'size', 'usage', 'maxUsage', 'description', 'value', 'slotType', 'slotIndex', 'createdAt', 'updatedAt'])

export type InventoryItemScalarFieldEnum = z.infer<typeof InventoryItemScalarFieldEnumSchema>;