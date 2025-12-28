import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  roll: z.literal(true).optional()
}).strict();
export const WeatherEntryAvgAggregateInputObjectSchema: z.ZodType<Prisma.WeatherEntryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryAvgAggregateInputType>;
export const WeatherEntryAvgAggregateInputObjectZodSchema = makeSchema();
