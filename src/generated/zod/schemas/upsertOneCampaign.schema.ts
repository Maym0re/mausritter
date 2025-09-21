import { z } from 'zod';
import { CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';
import { CampaignCreateInputObjectSchema } from './objects/CampaignCreateInput.schema';
import { CampaignUncheckedCreateInputObjectSchema } from './objects/CampaignUncheckedCreateInput.schema';
import { CampaignUpdateInputObjectSchema } from './objects/CampaignUpdateInput.schema';
import { CampaignUncheckedUpdateInputObjectSchema } from './objects/CampaignUncheckedUpdateInput.schema';

export const CampaignUpsertSchema = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), where: CampaignWhereUniqueInputObjectSchema, create: z.union([ CampaignCreateInputObjectSchema, CampaignUncheckedCreateInputObjectSchema ]), update: z.union([ CampaignUpdateInputObjectSchema, CampaignUncheckedUpdateInputObjectSchema ])  })