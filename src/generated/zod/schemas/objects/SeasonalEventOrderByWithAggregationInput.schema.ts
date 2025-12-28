import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SeasonalEventCountOrderByAggregateInputObjectSchema as SeasonalEventCountOrderByAggregateInputObjectSchema } from './SeasonalEventCountOrderByAggregateInput.schema';
import { SeasonalEventMaxOrderByAggregateInputObjectSchema as SeasonalEventMaxOrderByAggregateInputObjectSchema } from './SeasonalEventMaxOrderByAggregateInput.schema';
import { SeasonalEventMinOrderByAggregateInputObjectSchema as SeasonalEventMinOrderByAggregateInputObjectSchema } from './SeasonalEventMinOrderByAggregateInput.schema'

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
