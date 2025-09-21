import { z } from 'zod';
import { CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';

export const CampaignPlayerDeleteOneSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), where: CampaignPlayerWhereUniqueInputObjectSchema  })