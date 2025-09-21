import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  roll: SortOrderSchema.optional()
}).strict();
export const WeatherEntrySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WeatherEntrySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntrySumOrderByAggregateInput>;
export const WeatherEntrySumOrderByAggregateInputObjectZodSchema = makeSchema();
