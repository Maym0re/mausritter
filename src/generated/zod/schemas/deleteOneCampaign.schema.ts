import { z } from 'zod';
import { CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';

export const CampaignDeleteOneSchema = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), where: CampaignWhereUniqueInputObjectSchema  })