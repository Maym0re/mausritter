import { z } from 'zod';
import { WeatherEntryUpdateManyMutationInputObjectSchema } from './objects/WeatherEntryUpdateManyMutationInput.schema';
import { WeatherEntryWhereInputObjectSchema } from './objects/WeatherEntryWhereInput.schema';

export const WeatherEntryUpdateManySchema = z.object({ data: WeatherEntryUpdateManyMutationInputObjectSchema, where: WeatherEntryWhereInputObjectSchema.optional()  })