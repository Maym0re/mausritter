import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WeatherEntrySelectObjectSchema as WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryIncludeObjectSchema as WeatherEntryIncludeObjectSchema } from './objects/WeatherEntryInclude.schema';
import { WeatherEntryCreateInputObjectSchema as WeatherEntryCreateInputObjectSchema } from './objects/WeatherEntryCreateInput.schema';
import { WeatherEntryUncheckedCreateInputObjectSchema as WeatherEntryUncheckedCreateInputObjectSchema } from './objects/WeatherEntryUncheckedCreateInput.schema';

export const WeatherEntryCreateOneSchema: z.ZodType<Prisma.WeatherEntryCreateArgs> = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), data: z.union([WeatherEntryCreateInputObjectSchema, WeatherEntryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WeatherEntryCreateArgs>;

export const WeatherEntryCreateOneZodSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), data: z.union([WeatherEntryCreateInputObjectSchema, WeatherEntryUncheckedCreateInputObjectSchema]) }).strict();