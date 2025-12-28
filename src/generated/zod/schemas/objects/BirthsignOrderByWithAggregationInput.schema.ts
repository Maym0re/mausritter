import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BirthsignCountOrderByAggregateInputObjectSchema as BirthsignCountOrderByAggregateInputObjectSchema } from './BirthsignCountOrderByAggregateInput.schema';
import { BirthsignMaxOrderByAggregateInputObjectSchema as BirthsignMaxOrderByAggregateInputObjectSchema } from './BirthsignMaxOrderByAggregateInput.schema';
import { BirthsignMinOrderByAggregateInputObjectSchema as BirthsignMinOrderByAggregateInputObjectSchema } from './BirthsignMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sign: SortOrderSchema.optional(),
  disposition: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BirthsignCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BirthsignMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BirthsignMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BirthsignOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BirthsignOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignOrderByWithAggregationInput>;
export const BirthsignOrderByWithAggregationInputObjectZodSchema = makeSchema();
