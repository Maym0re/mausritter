import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignSelectObjectSchema as CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignIncludeObjectSchema as CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignUpdateInputObjectSchema as CampaignUpdateInputObjectSchema } from './objects/CampaignUpdateInput.schema';
import { CampaignUncheckedUpdateInputObjectSchema as CampaignUncheckedUpdateInputObjectSchema } from './objects/CampaignUncheckedUpdateInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';

export const CampaignUpdateOneSchema: z.ZodType<Prisma.CampaignUpdateArgs> = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), data: z.union([CampaignUpdateInputObjectSchema, CampaignUncheckedUpdateInputObjectSchema]), where: CampaignWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CampaignUpdateArgs>;

export const CampaignUpdateOneZodSchema = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), data: z.union([CampaignUpdateInputObjectSchema, CampaignUncheckedUpdateInputObjectSchema]), where: CampaignWhereUniqueInputObjectSchema }).strict();