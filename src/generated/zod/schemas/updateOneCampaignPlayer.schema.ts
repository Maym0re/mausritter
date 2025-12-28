import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignPlayerSelectObjectSchema as CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerIncludeObjectSchema as CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerUpdateInputObjectSchema as CampaignPlayerUpdateInputObjectSchema } from './objects/CampaignPlayerUpdateInput.schema';
import { CampaignPlayerUncheckedUpdateInputObjectSchema as CampaignPlayerUncheckedUpdateInputObjectSchema } from './objects/CampaignPlayerUncheckedUpdateInput.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';

export const CampaignPlayerUpdateOneSchema: z.ZodType<Prisma.CampaignPlayerUpdateArgs> = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), data: z.union([CampaignPlayerUpdateInputObjectSchema, CampaignPlayerUncheckedUpdateInputObjectSchema]), where: CampaignPlayerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateArgs>;

export const CampaignPlayerUpdateOneZodSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), data: z.union([CampaignPlayerUpdateInputObjectSchema, CampaignPlayerUncheckedUpdateInputObjectSchema]), where: CampaignPlayerWhereUniqueInputObjectSchema }).strict();