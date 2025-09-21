import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SeasonalEventCountOrderByAggregateInputObjectSchema } from './SeasonalEventCountOrderByAggregateInput.schema';
import { SeasonalEventMaxOrderByAggregateInputObjectSchema } from './SeasonalEventMaxOrderByAggregateInput.schema';
import { SeasonalEventMinOrderByAggregateInputObjectSchema } from './SeasonalEventMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  season: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  effect: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => SeasonalEventCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SeasonalEventMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SeasonalEventMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SeasonalEventOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SeasonalEventOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SeasonalEventOrderByWithAggregationInput>;
export const SeasonalEventOrderByWithAggregationInputObjectZodSchema = makeSchema();
