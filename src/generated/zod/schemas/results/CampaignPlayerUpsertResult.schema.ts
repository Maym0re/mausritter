import * as z from 'zod';
export const CampaignPlayerUpsertResultSchema = z.object({
  id: z.string(),
  campaignId: z.string(),
  userId: z.string(),
  campaign: z.unknown(),
  user: z.unknown(),
  joinedAt: z.date()
});