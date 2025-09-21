import { z } from 'zod';
import { CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerCreateInputObjectSchema } from './objects/CampaignPlayerCreateInput.schema';
import { CampaignPlayerUncheckedCreateInputObjectSchema } from './objects/CampaignPlayerUncheckedCreateInput.schema';

export const CampaignPlayerCreateOneSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), data: z.union([CampaignPlayerCreateInputObjectSchema, CampaignPlayerUncheckedCreateInputObjectSchema])  })