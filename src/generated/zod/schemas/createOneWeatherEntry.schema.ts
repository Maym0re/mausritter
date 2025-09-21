import { z } from 'zod';
import { WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryIncludeObjectSchema } from './objects/WeatherEntryInclude.schema';
import { WeatherEntryCreateInputObjectSchema } from './objects/WeatherEntryCreateInput.schema';
import { WeatherEntryUncheckedCreateInputObjectSchema } from './objects/WeatherEntryUncheckedCreateInput.schema';

export const WeatherEntryCreateOneSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), data: z.union([WeatherEntryCreateInputObjectSchema, WeatherEntryUncheckedCreateInputObjectSchema])  })