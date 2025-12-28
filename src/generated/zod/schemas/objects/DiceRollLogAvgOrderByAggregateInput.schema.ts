import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  total: SortOrderSchema.optional()
}).strict();
export const DiceRollLogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollLogAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogAvgOrderByAggregateInput>;
export const DiceRollLogAvgOrderByAggregateInputObjectZodSchema = makeSchema();
