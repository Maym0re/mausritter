import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignPlayerSelectObjectSchema as CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerIncludeObjectSchema as CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerCreateInputObjectSchema as CampaignPlayerCreateInputObjectSchema } from './objects/CampaignPlayerCreateInput.schema';
import { CampaignPlayerUncheckedCreateInputObjectSchema as CampaignPlayerUncheckedCreateInputObjectSchema } from './objects/CampaignPlayerUncheckedCreateInput.schema';

export const CampaignPlayerCreateOneSchema: z.ZodType<Prisma.CampaignPlayerCreateArgs> = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), data: z.union([CampaignPlayerCreateInputObjectSchema, CampaignPlayerUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerCreateArgs>;

export const CampaignPlayerCreateOneZodSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), data: z.union([CampaignPlayerCreateInputObjectSchema, CampaignPlayerUncheckedCreateInputObjectSchema]) }).strict();