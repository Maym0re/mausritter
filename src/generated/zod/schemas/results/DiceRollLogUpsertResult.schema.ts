import { z } from 'zod';
export const DiceRollLogUpsertResultSchema = z.object({
  id: z.string(),
  campaignId: z.string(),
  campaign: z.unknown(),
  userId: z.string(),
  user: z.unknown(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.date(),
  entries: z.array(z.unknown())
});