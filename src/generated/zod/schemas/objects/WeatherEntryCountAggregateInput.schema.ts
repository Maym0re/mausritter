import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  season: z.literal(true).optional(),
  roll: z.literal(true).optional(),
  weather: z.literal(true).optional(),
  isPoorCondition: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WeatherEntryCountAggregateInputObjectSchema: z.ZodType<Prisma.WeatherEntryCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryCountAggregateInputType>;
export const WeatherEntryCountAggregateInputObjectZodSchema = makeSchema();
