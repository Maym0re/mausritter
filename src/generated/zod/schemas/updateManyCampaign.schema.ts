import { z } from 'zod';
import { CampaignUpdateManyMutationInputObjectSchema } from './objects/CampaignUpdateManyMutationInput.schema';
import { CampaignWhereInputObjectSchema } from './objects/CampaignWhereInput.schema';

export const CampaignUpdateManySchema = z.object({ data: CampaignUpdateManyMutationInputObjectSchema, where: CampaignWhereInputObjectSchema.optional()  })