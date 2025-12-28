import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  x: SortOrderSchema.optional(),
  y: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional()
}).strict();
export const MapImageAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MapImageAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageAvgOrderByAggregateInput>;
export const MapImageAvgOrderByAggregateInputObjectZodSchema = makeSchema();
