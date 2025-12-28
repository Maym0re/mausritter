import * as z from 'zod';
// prettier-ignore
export const CampaignPlayerResultSchema = z.object({
    id: z.string(),
    campaignId: z.string(),
    userId: z.string(),
    campaign: z.unknown(),
    user: z.unknown(),
    joinedAt: z.date()
}).strict();

export type CampaignPlayerResultType = z.infer<typeof CampaignPlayerResultSchema>;
