import { z } from 'zod';
import { WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryIncludeObjectSchema } from './objects/WeatherEntryInclude.schema';
import { WeatherEntryUpdateInputObjectSchema } from './objects/WeatherEntryUpdateInput.schema';
import { WeatherEntryUncheckedUpdateInputObjectSchema } from './objects/WeatherEntryUncheckedUpdateInput.schema';
import { WeatherEntryWhereUniqueInputObjectSchema } from './objects/WeatherEntryWhereUniqueInput.schema';

export const WeatherEntryUpdateOneSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), data: z.union([WeatherEntryUpdateInputObjectSchema, WeatherEntryUncheckedUpdateInputObjectSchema]), where: WeatherEntryWhereUniqueInputObjectSchema  })