import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  population: SortOrderSchema.optional()
}).strict();
export const SettlementSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SettlementSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementSumOrderByAggregateInput>;
export const SettlementSumOrderByAggregateInputObjectZodSchema = makeSchema();
