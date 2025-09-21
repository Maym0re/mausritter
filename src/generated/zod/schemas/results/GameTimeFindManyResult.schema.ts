import { z } from 'zod';
export const GameTimeFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  campaignId: z.string(),
  campaign: z.unknown(),
  rounds: z.number().int(),
  turns: z.number().int(),
  watches: z.number().int(),
  days: z.number().int(),
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