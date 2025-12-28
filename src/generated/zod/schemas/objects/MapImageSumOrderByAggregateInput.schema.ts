import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  x: SortOrderSchema.optional(),
  y: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional()
}).strict();
export const MapImageSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MapImageSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageSumOrderByAggregateInput>;
export const MapImageSumOrderByAggregateInputObjectZodSchema = makeSchema();
