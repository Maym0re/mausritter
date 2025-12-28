import * as z from 'zod';
// prettier-ignore
export const CampaignPlayerModelSchema = z.object({
    id: z.string(),
    campaignId: z.string(),
    userId: z.string(),
    campaign: z.unknown(),
    user: z.unknown(),
    joinedAt: z.date()
}).strict();

export type CampaignPlayerPureType = z.infer<typeof CampaignPlayerModelSchema>;
