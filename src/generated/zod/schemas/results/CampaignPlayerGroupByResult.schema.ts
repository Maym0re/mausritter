import { z } from 'zod';
export const CampaignPlayerGroupByResultSchema = z.array(z.object({
  id: z.string(),
  campaignId: z.string(),
  userId: z.string(),
  joinedAt: z.date(),
  _count: z.object({
    id: z.number(),
    campaignId: z.number(),
    userId: z.number(),
    campaign: z.number(),
    user: z.number(),
    joinedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    campaignId: z.string().nullable(),
    userId: z.string().nullable(),
    joinedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    campaignId: z.string().nullable(),
    userId: z.string().nullable(),
    joinedAt: z.date().nullable()
  }).nullable().optional()
}));