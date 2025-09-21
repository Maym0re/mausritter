import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapMarkerOrderByWithRelationInputObjectSchema } from './objects/MapMarkerOrderByWithRelationInput.schema';
import { MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';
import { MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';
import { MapMarkerCountAggregateInputObjectSchema } from './objects/MapMarkerCountAggregateInput.schema';
import { MapMarkerMinAggregateInputObjectSchema } from './objects/MapMarkerMinAggregateInput.schema';
import { MapMarkerMaxAggregateInputObjectSchema } from './objects/MapMarkerMaxAggregateInput.schema';
import { MapMarkerAvgAggregateInputObjectSchema } from './objects/MapMarkerAvgAggregateInput.schema';
import { MapMarkerSumAggregateInputObjectSchema } from './objects/MapMarkerSumAggregateInput.schema';

export const MapMarkerAggregateSchema: z.ZodType<Prisma.MapMarkerAggregateArgs> = z.object({ orderBy: z.union([MapMarkerOrderByWithRelationInputObjectSchema, MapMarkerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapMarkerWhereInputObjectSchema.optional(), cursor: MapMarkerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MapMarkerCountAggregateInputObjectSchema ]).optional(), _min: MapMarkerMinAggregateInputObjectSchema.optional(), _max: MapMarkerMaxAggregateInputObjectSchema.optional(), _avg: MapMarkerAvgAggregateInputObjectSchema.optional(), _sum: MapMarkerSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MapMarkerAggregateArgs>;

export const MapMarkerAggregateZodSchema = z.object({ orderBy: z.union([MapMarkerOrderByWithRelationInputObjectSchema, MapMarkerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapMarkerWhereInputObjectSchema.optional(), cursor: MapMarkerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MapMarkerCountAggregateInputObjectSchema ]).optional(), _min: MapMarkerMinAggregateInputObjectSchema.optional(), _max: MapMarkerMaxAggregateInputObjectSchema.optional(), _avg: MapMarkerAvgAggregateInputObjectSchema.optional(), _sum: MapMarkerSumAggregateInputObjectSchema.optional() }).strict();