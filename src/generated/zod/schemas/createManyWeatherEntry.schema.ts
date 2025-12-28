import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WeatherEntryCreateManyInputObjectSchema as WeatherEntryCreateManyInputObjectSchema } from './objects/WeatherEntryCreateManyInput.schema';

export const WeatherEntryCreateManySchema: z.ZodType<Prisma.WeatherEntryCreateManyArgs> = z.object({ data: z.union([ WeatherEntryCreateManyInputObjectSchema, z.array(WeatherEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WeatherEntryCreateManyArgs>;

export const WeatherEntryCreateManyZodSchema = z.object({ data: z.union([ WeatherEntryCreateManyInputObjectSchema, z.array(WeatherEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();