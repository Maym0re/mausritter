import { z } from 'zod';
import { CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerUpdateManyMutationInputObjectSchema } from './objects/CampaignPlayerUpdateManyMutationInput.schema';
import { CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';

export const CampaignPlayerUpdateManyAndReturnSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), data: CampaignPlayerUpdateManyMutationInputObjectSchema, where: CampaignPlayerWhereInputObjectSchema.optional()  }).strict()