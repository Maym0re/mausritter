import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  rounds: SortOrderSchema.optional(),
  turns: SortOrderSchema.optional(),
  watches: SortOrderSchema.optional(),
  days: SortOrderSchema.optional()
}).strict();
export const GameTimeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameTimeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeSumOrderByAggregateInput>;
export const GameTimeSumOrderByAggregateInputObjectZodSchema = makeSchema();
