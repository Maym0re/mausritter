import { z } from 'zod';
import { CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerCreateInputObjectSchema } from './objects/CampaignPlayerCreateInput.schema';
import { CampaignPlayerUncheckedCreateInputObjectSchema } from './objects/CampaignPlayerUncheckedCreateInput.schema';
import { CampaignPlayerUpdateInputObjectSchema } from './objects/CampaignPlayerUpdateInput.schema';
import { CampaignPlayerUncheckedUpdateInputObjectSchema } from './objects/CampaignPlayerUncheckedUpdateInput.schema';

export const CampaignPlayerUpsertSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), where: CampaignPlayerWhereUniqueInputObjectSchema, create: z.union([ CampaignPlayerCreateInputObjectSchema, CampaignPlayerUncheckedCreateInputObjectSchema ]), update: z.union([ CampaignPlayerUpdateInputObjectSchema, CampaignPlayerUncheckedUpdateInputObjectSchema ])  })