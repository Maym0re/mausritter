import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  season: SeasonNameSchema,
  roll: z.number().int(),
  weather: z.string(),
  isPoorCondition: z.boolean()
}).strict();
export const WeatherEntryCreateManyInputObjectSchema: z.ZodType<Prisma.WeatherEntryCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryCreateManyInput>;
export const WeatherEntryCreateManyInputObjectZodSchema = makeSchema();
