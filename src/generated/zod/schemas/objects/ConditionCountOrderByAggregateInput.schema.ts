import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  clearRequirement: SortOrderSchema.optional(),
  effects: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ConditionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConditionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionCountOrderByAggregateInput>;
export const ConditionCountOrderByAggregateInputObjectZodSchema = makeSchema();
