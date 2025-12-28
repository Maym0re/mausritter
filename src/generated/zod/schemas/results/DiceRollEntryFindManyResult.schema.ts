import * as z from 'zod';
export const DiceRollEntryFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  logId: z.string(),
  log: z.unknown(),
  order: z.number().int(),
  type: z.string(),
  value: z.number().int(),
  sides: z.number().int().optional(),
  createdAt: z.date()
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