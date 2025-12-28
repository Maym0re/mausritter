import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignSelectObjectSchema as CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignIncludeObjectSchema as CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';
import { CampaignCreateInputObjectSchema as CampaignCreateInputObjectSchema } from './objects/CampaignCreateInput.schema';
import { CampaignUncheckedCreateInputObjectSchema as CampaignUncheckedCreateInputObjectSchema } from './objects/CampaignUncheckedCreateInput.schema';
import { CampaignUpdateInputObjectSchema as CampaignUpdateInputObjectSchema } from './objects/CampaignUpdateInput.schema';
import { CampaignUncheckedUpdateInputObjectSchema as CampaignUncheckedUpdateInputObjectSchema } from './objects/CampaignUncheckedUpdateInput.schema';

export const CampaignUpsertOneSchema: z.ZodType<Prisma.CampaignUpsertArgs> = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), where: CampaignWhereUniqueInputObjectSchema, create: z.union([ CampaignCreateInputObjectSchema, CampaignUncheckedCreateInputObjectSchema ]), update: z.union([ CampaignUpdateInputObjectSchema, CampaignUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CampaignUpsertArgs>;

export const CampaignUpsertOneZodSchema = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), where: CampaignWhereUniqueInputObjectSchema, create: z.union([ CampaignCreateInputObjectSchema, CampaignUncheckedCreateInputObjectSchema ]), update: z.union([ CampaignUpdateInputObjectSchema, CampaignUncheckedUpdateInputObjectSchema ]) }).strict();