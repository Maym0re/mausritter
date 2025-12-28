import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WeatherEntrySelectObjectSchema as WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryIncludeObjectSchema as WeatherEntryIncludeObjectSchema } from './objects/WeatherEntryInclude.schema';
import { WeatherEntryUpdateInputObjectSchema as WeatherEntryUpdateInputObjectSchema } from './objects/WeatherEntryUpdateInput.schema';
import { WeatherEntryUncheckedUpdateInputObjectSchema as WeatherEntryUncheckedUpdateInputObjectSchema } from './objects/WeatherEntryUncheckedUpdateInput.schema';
import { WeatherEntryWhereUniqueInputObjectSchema as WeatherEntryWhereUniqueInputObjectSchema } from './objects/WeatherEntryWhereUniqueInput.schema';

export const WeatherEntryUpdateOneSchema: z.ZodType<Prisma.WeatherEntryUpdateArgs> = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), data: z.union([WeatherEntryUpdateInputObjectSchema, WeatherEntryUncheckedUpdateInputObjectSchema]), where: WeatherEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WeatherEntryUpdateArgs>;

export const WeatherEntryUpdateOneZodSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), data: z.union([WeatherEntryUpdateInputObjectSchema, WeatherEntryUncheckedUpdateInputObjectSchema]), where: WeatherEntryWhereUniqueInputObjectSchema }).strict();