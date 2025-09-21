import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  rounds: SortOrderSchema.optional(),
  turns: SortOrderSchema.optional(),
  watches: SortOrderSchema.optional(),
  days: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GameTimeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameTimeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeCountOrderByAggregateInput>;
export const GameTimeCountOrderByAggregateInputObjectZodSchema = makeSchema();
