import { z } from 'zod';

export const CampaignScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'isActive', 'gmId', 'season', 'weatherEntryId', 'createdAt', 'updatedAt', 'todaysEvent'])

export type CampaignScalarFieldEnum = z.infer<typeof CampaignScalarFieldEnumSchema>;