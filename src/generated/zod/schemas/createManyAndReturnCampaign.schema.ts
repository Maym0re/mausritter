import { z } from 'zod';
import { CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignCreateManyInputObjectSchema } from './objects/CampaignCreateManyInput.schema';

export const CampaignCreateManyAndReturnSchema = z.object({ select: CampaignSelectObjectSchema.optional(), data: z.union([ CampaignCreateManyInputObjectSchema, z.array(CampaignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()