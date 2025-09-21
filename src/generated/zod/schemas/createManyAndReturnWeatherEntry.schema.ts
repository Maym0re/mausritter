import { z } from 'zod';
import { WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryCreateManyInputObjectSchema } from './objects/WeatherEntryCreateManyInput.schema';

export const WeatherEntryCreateManyAndReturnSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), data: z.union([ WeatherEntryCreateManyInputObjectSchema, z.array(WeatherEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()