import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryWhereInputObjectSchema as WeatherEntryWhereInputObjectSchema } from './WeatherEntryWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => WeatherEntryWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => WeatherEntryWhereInputObjectSchema).optional().nullable()
}).strict();
export const WeatherEntryNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.WeatherEntryNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryNullableScalarRelationFilter>;
export const WeatherEntryNullableScalarRelationFilterObjectZodSchema = makeSchema();
