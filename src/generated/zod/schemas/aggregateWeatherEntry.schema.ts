import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WeatherEntryOrderByWithRelationInputObjectSchema } from './objects/WeatherEntryOrderByWithRelationInput.schema';
import { WeatherEntryWhereInputObjectSchema } from './objects/WeatherEntryWhereInput.schema';
import { WeatherEntryWhereUniqueInputObjectSchema } from './objects/WeatherEntryWhereUniqueInput.schema';
import { WeatherEntryCountAggregateInputObjectSchema } from './objects/WeatherEntryCountAggregateInput.schema';
import { WeatherEntryMinAggregateInputObjectSchema } from './objects/WeatherEntryMinAggregateInput.schema';
import { WeatherEntryMaxAggregateInputObjectSchema } from './objects/WeatherEntryMaxAggregateInput.schema';
import { WeatherEntryAvgAggregateInputObjectSchema } from './objects/WeatherEntryAvgAggregateInput.schema';
import { WeatherEntrySumAggregateInputObjectSchema } from './objects/WeatherEntrySumAggregateInput.schema';

export const WeatherEntryAggregateSchema: z.ZodType<Prisma.WeatherEntryAggregateArgs> = z.object({ orderBy: z.union([WeatherEntryOrderByWithRelationInputObjectSchema, WeatherEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WeatherEntryWhereInputObjectSchema.optional(), cursor: WeatherEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WeatherEntryCountAggregateInputObjectSchema ]).optional(), _min: WeatherEntryMinAggregateInputObjectSchema.optional(), _max: WeatherEntryMaxAggregateInputObjectSchema.optional(), _avg: WeatherEntryAvgAggregateInputObjectSchema.optional(), _sum: WeatherEntrySumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WeatherEntryAggregateArgs>;

export const WeatherEntryAggregateZodSchema = z.object({ orderBy: z.union([WeatherEntryOrderByWithRelationInputObjectSchema, WeatherEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WeatherEntryWhereInputObjectSchema.optional(), cursor: WeatherEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WeatherEntryCountAggregateInputObjectSchema ]).optional(), _min: WeatherEntryMinAggregateInputObjectSchema.optional(), _max: WeatherEntryMaxAggregateInputObjectSchema.optional(), _avg: WeatherEntryAvgAggregateInputObjectSchema.optional(), _sum: WeatherEntrySumAggregateInputObjectSchema.optional() }).strict();