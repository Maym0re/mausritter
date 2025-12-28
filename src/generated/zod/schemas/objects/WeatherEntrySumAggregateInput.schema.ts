import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  roll: z.literal(true).optional()
}).strict();
export const WeatherEntrySumAggregateInputObjectSchema: z.ZodType<Prisma.WeatherEntrySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntrySumAggregateInputType>;
export const WeatherEntrySumAggregateInputObjectZodSchema = makeSchema();
