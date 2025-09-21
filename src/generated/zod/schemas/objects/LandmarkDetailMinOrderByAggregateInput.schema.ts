import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  effect: SortOrderSchema.optional(),
  landmarkId: SortOrderSchema.optional()
}).strict();
export const LandmarkDetailMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LandmarkDetailMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailMinOrderByAggregateInput>;
export const LandmarkDetailMinOrderByAggregateInputObjectZodSchema = makeSchema();
