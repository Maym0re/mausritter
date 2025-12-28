import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WeatherEntrySelectObjectSchema as WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryUpdateManyMutationInputObjectSchema as WeatherEntryUpdateManyMutationInputObjectSchema } from './objects/WeatherEntryUpdateManyMutationInput.schema';
import { WeatherEntryWhereInputObjectSchema as WeatherEntryWhereInputObjectSchema } from './objects/WeatherEntryWhereInput.schema';

export const WeatherEntryUpdateManyAndReturnSchema: z.ZodType<Prisma.WeatherEntryUpdateManyAndReturnArgs> = z.object({ select: WeatherEntrySelectObjectSchema.optional(), data: WeatherEntryUpdateManyMutationInputObjectSchema, where: WeatherEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WeatherEntryUpdateManyAndReturnArgs>;

export const WeatherEntryUpdateManyAndReturnZodSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), data: WeatherEntryUpdateManyMutationInputObjectSchema, where: WeatherEntryWhereInputObjectSchema.optional() }).strict();