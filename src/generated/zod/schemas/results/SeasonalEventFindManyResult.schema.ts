import { z } from 'zod';
export const SeasonalEventFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  season: z.unknown(),
  description: z.string(),
  effect: z.string().optional()
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