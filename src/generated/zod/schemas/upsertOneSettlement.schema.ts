import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettlementSelectObjectSchema as SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementIncludeObjectSchema as SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementWhereUniqueInputObjectSchema as SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';
import { SettlementCreateInputObjectSchema as SettlementCreateInputObjectSchema } from './objects/SettlementCreateInput.schema';
import { SettlementUncheckedCreateInputObjectSchema as SettlementUncheckedCreateInputObjectSchema } from './objects/SettlementUncheckedCreateInput.schema';
import { SettlementUpdateInputObjectSchema as SettlementUpdateInputObjectSchema } from './objects/SettlementUpdateInput.schema';
import { SettlementUncheckedUpdateInputObjectSchema as SettlementUncheckedUpdateInputObjectSchema } from './objects/SettlementUncheckedUpdateInput.schema';

export const SettlementUpsertOneSchema: z.ZodType<Prisma.SettlementUpsertArgs> = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), where: SettlementWhereUniqueInputObjectSchema, create: z.union([ SettlementCreateInputObjectSchema, SettlementUncheckedCreateInputObjectSchema ]), update: z.union([ SettlementUpdateInputObjectSchema, SettlementUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SettlementUpsertArgs>;

export const SettlementUpsertOneZodSchema = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), where: SettlementWhereUniqueInputObjectSchema, create: z.union([ SettlementCreateInputObjectSchema, SettlementUncheckedCreateInputObjectSchema ]), update: z.union([ SettlementUpdateInputObjectSchema, SettlementUncheckedUpdateInputObjectSchema ]) }).strict();