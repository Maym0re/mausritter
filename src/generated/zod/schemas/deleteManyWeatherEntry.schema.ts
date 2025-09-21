import { z } from 'zod';
import { WeatherEntryWhereInputObjectSchema } from './objects/WeatherEntryWhereInput.schema';

export const WeatherEntryDeleteManySchema = z.object({ where: WeatherEntryWhereInputObjectSchema.optional()  })