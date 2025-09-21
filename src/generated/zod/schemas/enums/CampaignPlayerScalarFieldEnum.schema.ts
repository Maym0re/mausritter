import { z } from 'zod';

export const CampaignPlayerScalarFieldEnumSchema = z.enum(['id', 'campaignId', 'userId', 'joinedAt'])

export type CampaignPlayerScalarFieldEnum = z.infer<typeof CampaignPlayerScalarFieldEnumSchema>;