import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  hexMapId: SortOrderSchema.optional(),
  data: SortOrderSchema.optional(),
  x: SortOrderSchema.optional(),
  y: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const MapImageCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MapImageCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageCountOrderByAggregateInput>;
export const MapImageCountOrderByAggregateInputObjectZodSchema = makeSchema();
