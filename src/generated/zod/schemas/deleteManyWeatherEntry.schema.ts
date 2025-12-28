import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WeatherEntryWhereInputObjectSchema as WeatherEntryWhereInputObjectSchema } from './objects/WeatherEntryWhereInput.schema';

export const WeatherEntryDeleteManySchema: z.ZodType<Prisma.WeatherEntryDeleteManyArgs> = z.object({ where: WeatherEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WeatherEntryDeleteManyArgs>;

export const WeatherEntryDeleteManyZodSchema = z.object({ where: WeatherEntryWhereInputObjectSchema.optional() }).strict();