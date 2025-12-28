import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  hexTypeId: SortOrderSchema.optional()
}).strict();
export const LandmarkMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LandmarkMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkMinOrderByAggregateInput>;
export const LandmarkMinOrderByAggregateInputObjectZodSchema = makeSchema();
