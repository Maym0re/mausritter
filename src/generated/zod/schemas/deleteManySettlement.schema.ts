import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettlementWhereInputObjectSchema as SettlementWhereInputObjectSchema } from './objects/SettlementWhereInput.schema';

export const SettlementDeleteManySchema: z.ZodType<Prisma.SettlementDeleteManyArgs> = z.object({ where: SettlementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SettlementDeleteManyArgs>;

export const SettlementDeleteManyZodSchema = z.object({ where: SettlementWhereInputObjectSchema.optional() }).strict();