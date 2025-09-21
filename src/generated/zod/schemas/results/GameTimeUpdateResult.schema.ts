import { z } from 'zod';
export const GameTimeUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  campaignId: z.string(),
  campaign: z.unknown(),
  rounds: z.number().int(),
  turns: z.number().int(),
  watches: z.number().int(),
  days: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date()
}));