import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  population: SortOrderSchema.optional()
}).strict();
export const SettlementAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SettlementAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementAvgOrderByAggregateInput>;
export const SettlementAvgOrderByAggregateInputObjectZodSchema = makeSchema();
