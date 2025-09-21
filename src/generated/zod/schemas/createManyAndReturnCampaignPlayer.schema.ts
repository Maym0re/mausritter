import { z } from 'zod';
import { CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerCreateManyInputObjectSchema } from './objects/CampaignPlayerCreateManyInput.schema';

export const CampaignPlayerCreateManyAndReturnSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), data: z.union([ CampaignPlayerCreateManyInputObjectSchema, z.array(CampaignPlayerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()