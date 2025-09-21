import { z } from 'zod';
import { WeatherEntryCreateManyInputObjectSchema } from './objects/WeatherEntryCreateManyInput.schema';

export const WeatherEntryCreateManySchema = z.object({ data: z.union([ WeatherEntryCreateManyInputObjectSchema, z.array(WeatherEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })