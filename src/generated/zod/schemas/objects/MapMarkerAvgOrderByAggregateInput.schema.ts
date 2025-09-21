import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  x: SortOrderSchema.optional(),
  y: SortOrderSchema.optional(),
  z: SortOrderSchema.optional()
}).strict();
export const MapMarkerAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MapMarkerAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerAvgOrderByAggregateInput>;
export const MapMarkerAvgOrderByAggregateInputObjectZodSchema = makeSchema();
