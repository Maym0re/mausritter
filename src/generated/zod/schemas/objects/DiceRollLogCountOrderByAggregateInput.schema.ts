import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  notation: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const DiceRollLogCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollLogCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCountOrderByAggregateInput>;
export const DiceRollLogCountOrderByAggregateInputObjectZodSchema = makeSchema();
