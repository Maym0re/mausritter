import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  hexTypeId: SortOrderSchema.optional()
}).strict();
export const LandmarkMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LandmarkMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkMaxOrderByAggregateInput>;
export const LandmarkMaxOrderByAggregateInputObjectZodSchema = makeSchema();
