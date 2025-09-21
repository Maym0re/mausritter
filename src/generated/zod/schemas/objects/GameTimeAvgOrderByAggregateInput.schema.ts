import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  rounds: SortOrderSchema.optional(),
  turns: SortOrderSchema.optional(),
  watches: SortOrderSchema.optional(),
  days: SortOrderSchema.optional()
}).strict();
export const GameTimeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameTimeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeAvgOrderByAggregateInput>;
export const GameTimeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
