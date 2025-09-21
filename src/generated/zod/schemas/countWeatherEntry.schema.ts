import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WeatherEntryOrderByWithRelationInputObjectSchema } from './objects/WeatherEntryOrderByWithRelationInput.schema';
import { WeatherEntryWhereInputObjectSchema } from './objects/WeatherEntryWhereInput.schema';
import { WeatherEntryWhereUniqueInputObjectSchema } from './objects/WeatherEntryWhereUniqueInput.schema';
import { WeatherEntryCountAggregateInputObjectSchema } from './objects/WeatherEntryCountAggregateInput.schema';

export const WeatherEntryCountSchema: z.ZodType<Prisma.WeatherEntryCountArgs> = z.object({ orderBy: z.union([WeatherEntryOrderByWithRelationInputObjectSchema, WeatherEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WeatherEntryWhereInputObjectSchema.optional(), cursor: WeatherEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WeatherEntryCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WeatherEntryCountArgs>;

export const WeatherEntryCountZodSchema = z.object({ orderBy: z.union([WeatherEntryOrderByWithRelationInputObjectSchema, WeatherEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WeatherEntryWhereInputObjectSchema.optional(), cursor: WeatherEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WeatherEntryCountAggregateInputObjectSchema ]).optional() }).strict();