import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WeatherEntrySelectObjectSchema as WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryCreateManyInputObjectSchema as WeatherEntryCreateManyInputObjectSchema } from './objects/WeatherEntryCreateManyInput.schema';

export const WeatherEntryCreateManyAndReturnSchema: z.ZodType<Prisma.WeatherEntryCreateManyAndReturnArgs> = z.object({ select: WeatherEntrySelectObjectSchema.optional(), data: z.union([ WeatherEntryCreateManyInputObjectSchema, z.array(WeatherEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WeatherEntryCreateManyAndReturnArgs>;

export const WeatherEntryCreateManyAndReturnZodSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), data: z.union([ WeatherEntryCreateManyInputObjectSchema, z.array(WeatherEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();