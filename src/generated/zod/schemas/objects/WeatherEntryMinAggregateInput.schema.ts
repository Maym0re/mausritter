import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  season: z.literal(true).optional(),
  roll: z.literal(true).optional(),
  weather: z.literal(true).optional(),
  isPoorCondition: z.literal(true).optional()
}).strict();
export const WeatherEntryMinAggregateInputObjectSchema: z.ZodType<Prisma.WeatherEntryMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryMinAggregateInputType>;
export const WeatherEntryMinAggregateInputObjectZodSchema = makeSchema();
