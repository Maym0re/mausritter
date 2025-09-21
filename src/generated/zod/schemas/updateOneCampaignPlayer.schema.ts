import { z } from 'zod';
import { CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerUpdateInputObjectSchema } from './objects/CampaignPlayerUpdateInput.schema';
import { CampaignPlayerUncheckedUpdateInputObjectSchema } from './objects/CampaignPlayerUncheckedUpdateInput.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';

export const CampaignPlayerUpdateOneSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), data: z.union([CampaignPlayerUpdateInputObjectSchema, CampaignPlayerUncheckedUpdateInputObjectSchema]), where: CampaignPlayerWhereUniqueInputObjectSchema  })