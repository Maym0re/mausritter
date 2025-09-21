import { z } from 'zod';
import { CampaignPlayerUpdateManyMutationInputObjectSchema } from './objects/CampaignPlayerUpdateManyMutationInput.schema';
import { CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';

export const CampaignPlayerUpdateManySchema = z.object({ data: CampaignPlayerUpdateManyMutationInputObjectSchema, where: CampaignPlayerWhereInputObjectSchema.optional()  })