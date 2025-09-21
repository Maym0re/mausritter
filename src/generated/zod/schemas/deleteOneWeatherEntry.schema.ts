import { z } from 'zod';
import { WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryIncludeObjectSchema } from './objects/WeatherEntryInclude.schema';
import { WeatherEntryWhereUniqueInputObjectSchema } from './objects/WeatherEntryWhereUniqueInput.schema';

export const WeatherEntryDeleteOneSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), where: WeatherEntryWhereUniqueInputObjectSchema  })