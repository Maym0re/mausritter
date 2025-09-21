import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  hexMapId: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  x: SortOrderSchema.optional(),
  y: SortOrderSchema.optional(),
  z: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const MapMarkerCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MapMarkerCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerCountOrderByAggregateInput>;
export const MapMarkerCountOrderByAggregateInputObjectZodSchema = makeSchema();
