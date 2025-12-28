import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WeatherEntryCountOrderByAggregateInputObjectSchema as WeatherEntryCountOrderByAggregateInputObjectSchema } from './WeatherEntryCountOrderByAggregateInput.schema';
import { WeatherEntryAvgOrderByAggregateInputObjectSchema as WeatherEntryAvgOrderByAggregateInputObjectSchema } from './WeatherEntryAvgOrderByAggregateInput.schema';
import { WeatherEntryMaxOrderByAggregateInputObjectSchema as WeatherEntryMaxOrderByAggregateInputObjectSchema } from './WeatherEntryMaxOrderByAggregateInput.schema';
import { WeatherEntryMinOrderByAggregateInputObjectSchema as WeatherEntryMinOrderByAggregateInputObjectSchema } from './WeatherEntryMinOrderByAggregateInput.schema';
import { WeatherEntrySumOrderByAggregateInputObjectSchema as WeatherEntrySumOrderByAggregateInputObjectSchema } from './WeatherEntrySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  season: SortOrderSchema.optional(),
  roll: SortOrderSchema.optional(),
  weather: SortOrderSchema.optional(),
  isPoorCondition: SortOrderSchema.optional(),
  _count: z.lazy(() => WeatherEntryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WeatherEntryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WeatherEntryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WeatherEntryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WeatherEntrySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WeatherEntryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WeatherEntryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryOrderByWithAggregationInput>;
export const WeatherEntryOrderByWithAggregationInputObjectZodSchema = makeSchema();
