import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  season: SortOrderSchema.optional(),
  roll: SortOrderSchema.optional(),
  weather: SortOrderSchema.optional(),
  isPoorCondition: SortOrderSchema.optional()
}).strict();
export const WeatherEntryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WeatherEntryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryMinOrderByAggregateInput>;
export const WeatherEntryMinOrderByAggregateInputObjectZodSchema = makeSchema();
