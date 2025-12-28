import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WeatherEntryUpdateManyMutationInputObjectSchema as WeatherEntryUpdateManyMutationInputObjectSchema } from './objects/WeatherEntryUpdateManyMutationInput.schema';
import { WeatherEntryWhereInputObjectSchema as WeatherEntryWhereInputObjectSchema } from './objects/WeatherEntryWhereInput.schema';

export const WeatherEntryUpdateManySchema: z.ZodType<Prisma.WeatherEntryUpdateManyArgs> = z.object({ data: WeatherEntryUpdateManyMutationInputObjectSchema, where: WeatherEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WeatherEntryUpdateManyArgs>;

export const WeatherEntryUpdateManyZodSchema = z.object({ data: WeatherEntryUpdateManyMutationInputObjectSchema, where: WeatherEntryWhereInputObjectSchema.optional() }).strict();