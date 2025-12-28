import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignSelectObjectSchema as CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignIncludeObjectSchema as CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignCreateInputObjectSchema as CampaignCreateInputObjectSchema } from './objects/CampaignCreateInput.schema';
import { CampaignUncheckedCreateInputObjectSchema as CampaignUncheckedCreateInputObjectSchema } from './objects/CampaignUncheckedCreateInput.schema';

export const CampaignCreateOneSchema: z.ZodType<Prisma.CampaignCreateArgs> = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), data: z.union([CampaignCreateInputObjectSchema, CampaignUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CampaignCreateArgs>;

export const CampaignCreateOneZodSchema = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), data: z.union([CampaignCreateInputObjectSchema, CampaignUncheckedCreateInputObjectSchema]) }).strict();