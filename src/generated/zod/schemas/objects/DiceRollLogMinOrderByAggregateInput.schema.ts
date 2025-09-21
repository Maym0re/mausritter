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
export const DiceRollLogMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollLogMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogMinOrderByAggregateInput>;
export const DiceRollLogMinOrderByAggregateInputObjectZodSchema = makeSchema();
