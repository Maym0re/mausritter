import * as z from 'zod';
export const DiceRollLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  campaignId: z.string(),
  campaign: z.unknown(),
  userId: z.string(),
  user: z.unknown(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.date(),
  entries: z.array(z.unknown())
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