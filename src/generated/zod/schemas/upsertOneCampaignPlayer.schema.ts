import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignPlayerSelectObjectSchema as CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerIncludeObjectSchema as CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerCreateInputObjectSchema as CampaignPlayerCreateInputObjectSchema } from './objects/CampaignPlayerCreateInput.schema';
import { CampaignPlayerUncheckedCreateInputObjectSchema as CampaignPlayerUncheckedCreateInputObjectSchema } from './objects/CampaignPlayerUncheckedCreateInput.schema';
import { CampaignPlayerUpdateInputObjectSchema as CampaignPlayerUpdateInputObjectSchema } from './objects/CampaignPlayerUpdateInput.schema';
import { CampaignPlayerUncheckedUpdateInputObjectSchema as CampaignPlayerUncheckedUpdateInputObjectSchema } from './objects/CampaignPlayerUncheckedUpdateInput.schema';

export const CampaignPlayerUpsertOneSchema: z.ZodType<Prisma.CampaignPlayerUpsertArgs> = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), where: CampaignPlayerWhereUniqueInputObjectSchema, create: z.union([ CampaignPlayerCreateInputObjectSchema, CampaignPlayerUncheckedCreateInputObjectSchema ]), update: z.union([ CampaignPlayerUpdateInputObjectSchema, CampaignPlayerUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerUpsertArgs>;

export const CampaignPlayerUpsertOneZodSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), where: CampaignPlayerWhereUniqueInputObjectSchema, create: z.union([ CampaignPlayerCreateInputObjectSchema, CampaignPlayerUncheckedCreateInputObjectSchema ]), update: z.union([ CampaignPlayerUpdateInputObjectSchema, CampaignPlayerUncheckedUpdateInputObjectSchema ]) }).strict();