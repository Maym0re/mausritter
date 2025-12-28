import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettlementSelectObjectSchema as SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementIncludeObjectSchema as SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementUpdateInputObjectSchema as SettlementUpdateInputObjectSchema } from './objects/SettlementUpdateInput.schema';
import { SettlementUncheckedUpdateInputObjectSchema as SettlementUncheckedUpdateInputObjectSchema } from './objects/SettlementUncheckedUpdateInput.schema';
import { SettlementWhereUniqueInputObjectSchema as SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';

export const SettlementUpdateOneSchema: z.ZodType<Prisma.SettlementUpdateArgs> = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), data: z.union([SettlementUpdateInputObjectSchema, SettlementUncheckedUpdateInputObjectSchema]), where: SettlementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettlementUpdateArgs>;

export const SettlementUpdateOneZodSchema = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), data: z.union([SettlementUpdateInputObjectSchema, SettlementUncheckedUpdateInputObjectSchema]), where: SettlementWhereUniqueInputObjectSchema }).strict();