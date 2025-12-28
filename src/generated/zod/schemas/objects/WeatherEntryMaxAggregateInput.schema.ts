import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  season: z.literal(true).optional(),
  roll: z.literal(true).optional(),
  weather: z.literal(true).optional(),
  isPoorCondition: z.literal(true).optional()
}).strict();
export const WeatherEntryMaxAggregateInputObjectSchema: z.ZodType<Prisma.WeatherEntryMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryMaxAggregateInputType>;
export const WeatherEntryMaxAggregateInputObjectZodSchema = makeSchema();
