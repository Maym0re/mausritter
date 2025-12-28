import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettlementSelectObjectSchema as SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementIncludeObjectSchema as SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementWhereUniqueInputObjectSchema as SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';

export const SettlementDeleteOneSchema: z.ZodType<Prisma.SettlementDeleteArgs> = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), where: SettlementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettlementDeleteArgs>;

export const SettlementDeleteOneZodSchema = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), where: SettlementWhereUniqueInputObjectSchema }).strict();