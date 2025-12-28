import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignSelectObjectSchema as CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignIncludeObjectSchema as CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';

export const CampaignDeleteOneSchema: z.ZodType<Prisma.CampaignDeleteArgs> = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), where: CampaignWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CampaignDeleteArgs>;

export const CampaignDeleteOneZodSchema = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), where: CampaignWhereUniqueInputObjectSchema }).strict();