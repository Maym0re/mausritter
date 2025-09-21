import { z } from 'zod';
import { CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignUpdateManyMutationInputObjectSchema } from './objects/CampaignUpdateManyMutationInput.schema';
import { CampaignWhereInputObjectSchema } from './objects/CampaignWhereInput.schema';

export const CampaignUpdateManyAndReturnSchema = z.object({ select: CampaignSelectObjectSchema.optional(), data: CampaignUpdateManyMutationInputObjectSchema, where: CampaignWhereInputObjectSchema.optional()  }).strict()