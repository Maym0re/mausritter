import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  sides: SortOrderSchema.optional()
}).strict();
export const DiceRollEntryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollEntryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryAvgOrderByAggregateInput>;
export const DiceRollEntryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
