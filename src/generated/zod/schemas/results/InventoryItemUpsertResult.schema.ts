import { z } from 'zod';
export const InventoryItemUpsertResultSchema = z.object({
  id: z.string(),
  characterId: z.string(),
  character: z.unknown(),
  name: z.string(),
  type: z.string(),
  size: z.number().int(),
  usage: z.number().int(),
  maxUsage: z.number().int(),
  description: z.string().optional(),
  value: z.number().int().optional(),
  slotType: z.unknown(),
  slotIndex: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date()
});