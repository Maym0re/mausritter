import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sign: SortOrderSchema.optional(),
  disposition: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BirthsignMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BirthsignMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignMaxOrderByAggregateInput>;
export const BirthsignMaxOrderByAggregateInputObjectZodSchema = makeSchema();
