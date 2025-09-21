import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  effect: SortOrderSchema.optional(),
  landmarkId: SortOrderSchema.optional()
}).strict();
export const LandmarkDetailCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCountOrderByAggregateInput>;
export const LandmarkDetailCountOrderByAggregateInputObjectZodSchema = makeSchema();
