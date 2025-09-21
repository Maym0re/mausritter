import { z } from 'zod';
import { CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignUpdateInputObjectSchema } from './objects/CampaignUpdateInput.schema';
import { CampaignUncheckedUpdateInputObjectSchema } from './objects/CampaignUncheckedUpdateInput.schema';
import { CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';

export const CampaignUpdateOneSchema = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), data: z.union([CampaignUpdateInputObjectSchema, CampaignUncheckedUpdateInputObjectSchema]), where: CampaignWhereUniqueInputObjectSchema  })