import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  roll: SortOrderSchema.optional()
}).strict();
export const WeatherEntryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WeatherEntryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryAvgOrderByAggregateInput>;
export const WeatherEntryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
