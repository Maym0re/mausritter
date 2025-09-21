import { z } from 'zod';
import { CampaignPlayerCreateManyInputObjectSchema } from './objects/CampaignPlayerCreateManyInput.schema';

export const CampaignPlayerCreateManySchema = z.object({ data: z.union([ CampaignPlayerCreateManyInputObjectSchema, z.array(CampaignPlayerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })