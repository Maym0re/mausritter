import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  x: SortOrderSchema.optional(),
  y: SortOrderSchema.optional(),
  z: SortOrderSchema.optional()
}).strict();
export const MapMarkerSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MapMarkerSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerSumOrderByAggregateInput>;
export const MapMarkerSumOrderByAggregateInputObjectZodSchema = makeSchema();
