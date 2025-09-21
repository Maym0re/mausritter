import { z } from 'zod';
import { WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryUpdateManyMutationInputObjectSchema } from './objects/WeatherEntryUpdateManyMutationInput.schema';
import { WeatherEntryWhereInputObjectSchema } from './objects/WeatherEntryWhereInput.schema';

export const WeatherEntryUpdateManyAndReturnSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), data: WeatherEntryUpdateManyMutationInputObjectSchema, where: WeatherEntryWhereInputObjectSchema.optional()  }).strict()