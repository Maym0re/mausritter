import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettlementSelectObjectSchema as SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementIncludeObjectSchema as SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementWhereUniqueInputObjectSchema as SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';

export const SettlementFindUniqueOrThrowSchema: z.ZodType<Prisma.SettlementFindUniqueOrThrowArgs> = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), where: SettlementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettlementFindUniqueOrThrowArgs>;

export const SettlementFindUniqueOrThrowZodSchema = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), where: SettlementWhereUniqueInputObjectSchema }).strict();