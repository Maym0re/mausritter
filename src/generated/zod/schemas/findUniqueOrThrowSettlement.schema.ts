import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';

export const SettlementFindUniqueOrThrowSchema: z.ZodType<Prisma.SettlementFindUniqueOrThrowArgs> = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), where: SettlementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettlementFindUniqueOrThrowArgs>;

export const SettlementFindUniqueOrThrowZodSchema = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), where: SettlementWhereUniqueInputObjectSchema }).strict();