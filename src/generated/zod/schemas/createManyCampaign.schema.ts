import { z } from 'zod';
import { CampaignCreateManyInputObjectSchema } from './objects/CampaignCreateManyInput.schema';

export const CampaignCreateManySchema = z.object({ data: z.union([ CampaignCreateManyInputObjectSchema, z.array(CampaignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })