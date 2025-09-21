import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sign: SortOrderSchema.optional(),
  disposition: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BirthsignMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BirthsignMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignMinOrderByAggregateInput>;
export const BirthsignMinOrderByAggregateInputObjectZodSchema = makeSchema();
