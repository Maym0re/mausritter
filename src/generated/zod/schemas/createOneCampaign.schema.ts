import { z } from 'zod';
import { CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignCreateInputObjectSchema } from './objects/CampaignCreateInput.schema';
import { CampaignUncheckedCreateInputObjectSchema } from './objects/CampaignUncheckedCreateInput.schema';

export const CampaignCreateOneSchema = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), data: z.union([CampaignCreateInputObjectSchema, CampaignUncheckedCreateInputObjectSchema])  })