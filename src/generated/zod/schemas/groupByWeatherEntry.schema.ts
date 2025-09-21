import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WeatherEntryWhereInputObjectSchema } from './objects/WeatherEntryWhereInput.schema';
import { WeatherEntryOrderByWithAggregationInputObjectSchema } from './objects/WeatherEntryOrderByWithAggregationInput.schema';
import { WeatherEntryScalarWhereWithAggregatesInputObjectSchema } from './objects/WeatherEntryScalarWhereWithAggregatesInput.schema';
import { WeatherEntryScalarFieldEnumSchema } from './enums/WeatherEntryScalarFieldEnum.schema';
import { WeatherEntryCountAggregateInputObjectSchema } from './objects/WeatherEntryCountAggregateInput.schema';
import { WeatherEntryMinAggregateInputObjectSchema } from './objects/WeatherEntryMinAggregateInput.schema';
import { WeatherEntryMaxAggregateInputObjectSchema } from './objects/WeatherEntryMaxAggregateInput.schema';
import { WeatherEntryAvgAggregateInputObjectSchema } from './objects/WeatherEntryAvgAggregateInput.schema';
import { WeatherEntrySumAggregateInputObjectSchema } from './objects/WeatherEntrySumAggregateInput.schema';

export const WeatherEntryGroupBySchema: z.ZodType<Prisma.WeatherEntryGroupByArgs> = z.object({ where: WeatherEntryWhereInputObjectSchema.optional(), orderBy: z.union([WeatherEntryOrderByWithAggregationInputObjectSchema, WeatherEntryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: WeatherEntryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(WeatherEntryScalarFieldEnumSchema), _count: z.union([ z.literal(true), WeatherEntryCountAggregateInputObjectSchema ]).optional(), _min: WeatherEntryMinAggregateInputObjectSchema.optional(), _max: WeatherEntryMaxAggregateInputObjectSchema.optional(), _avg: WeatherEntryAvgAggregateInputObjectSchema.optional(), _sum: WeatherEntrySumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WeatherEntryGroupByArgs>;

export const WeatherEntryGroupByZodSchema = z.object({ where: WeatherEntryWhereInputObjectSchema.optional(), orderBy: z.union([WeatherEntryOrderByWithAggregationInputObjectSchema, WeatherEntryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: WeatherEntryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(WeatherEntryScalarFieldEnumSchema), _count: z.union([ z.literal(true), WeatherEntryCountAggregateInputObjectSchema ]).optional(), _min: WeatherEntryMinAggregateInputObjectSchema.optional(), _max: WeatherEntryMaxAggregateInputObjectSchema.optional(), _avg: WeatherEntryAvgAggregateInputObjectSchema.optional(), _sum: WeatherEntrySumAggregateInputObjectSchema.optional() }).strict();