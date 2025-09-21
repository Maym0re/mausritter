import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HexTypeCountOrderByAggregateInputObjectSchema } from './HexTypeCountOrderByAggregateInput.schema';
import { HexTypeMaxOrderByAggregateInputObjectSchema } from './HexTypeMaxOrderByAggregateInput.schema';
import { HexTypeMinOrderByAggregateInputObjectSchema } from './HexTypeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  _count: z.lazy(() => HexTypeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => HexTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => HexTypeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const HexTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.HexTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeOrderByWithAggregationInput>;
export const HexTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
