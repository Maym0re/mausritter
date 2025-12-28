import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WeatherEntrySelectObjectSchema as WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryIncludeObjectSchema as WeatherEntryIncludeObjectSchema } from './objects/WeatherEntryInclude.schema';
import { WeatherEntryWhereUniqueInputObjectSchema as WeatherEntryWhereUniqueInputObjectSchema } from './objects/WeatherEntryWhereUniqueInput.schema';

export const WeatherEntryFindUniqueSchema: z.ZodType<Prisma.WeatherEntryFindUniqueArgs> = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), where: WeatherEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WeatherEntryFindUniqueArgs>;

export const WeatherEntryFindUniqueZodSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), where: WeatherEntryWhereUniqueInputObjectSchema }).strict();