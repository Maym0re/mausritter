import * as z from 'zod';
export const InventoryItemFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});