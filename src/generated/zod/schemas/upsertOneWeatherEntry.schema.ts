import { z } from 'zod';
import { WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryIncludeObjectSchema } from './objects/WeatherEntryInclude.schema';
import { WeatherEntryWhereUniqueInputObjectSchema } from './objects/WeatherEntryWhereUniqueInput.schema';
import { WeatherEntryCreateInputObjectSchema } from './objects/WeatherEntryCreateInput.schema';
import { WeatherEntryUncheckedCreateInputObjectSchema } from './objects/WeatherEntryUncheckedCreateInput.schema';
import { WeatherEntryUpdateInputObjectSchema } from './objects/WeatherEntryUpdateInput.schema';
import { WeatherEntryUncheckedUpdateInputObjectSchema } from './objects/WeatherEntryUncheckedUpdateInput.schema';

export const WeatherEntryUpsertSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), where: WeatherEntryWhereUniqueInputObjectSchema, create: z.union([ WeatherEntryCreateInputObjectSchema, WeatherEntryUncheckedCreateInputObjectSchema ]), update: z.union([ WeatherEntryUpdateInputObjectSchema, WeatherEntryUncheckedUpdateInputObjectSchema ])  })