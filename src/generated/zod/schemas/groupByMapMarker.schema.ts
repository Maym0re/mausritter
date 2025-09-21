import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';
import { MapMarkerOrderByWithAggregationInputObjectSchema } from './objects/MapMarkerOrderByWithAggregationInput.schema';
import { MapMarkerScalarWhereWithAggregatesInputObjectSchema } from './objects/MapMarkerScalarWhereWithAggregatesInput.schema';
import { MapMarkerScalarFieldEnumSchema } from './enums/MapMarkerScalarFieldEnum.schema';
import { MapMarkerCountAggregateInputObjectSchema } from './objects/MapMarkerCountAggregateInput.schema';
import { MapMarkerMinAggregateInputObjectSchema } from './objects/MapMarkerMinAggregateInput.schema';
import { MapMarkerMaxAggregateInputObjectSchema } from './objects/MapMarkerMaxAggregateInput.schema';
import { MapMarkerAvgAggregateInputObjectSchema } from './objects/MapMarkerAvgAggregateInput.schema';
import { MapMarkerSumAggregateInputObjectSchema } from './objects/MapMarkerSumAggregateInput.schema';

export const MapMarkerGroupBySchema: z.ZodType<Prisma.MapMarkerGroupByArgs> = z.object({ where: MapMarkerWhereInputObjectSchema.optional(), orderBy: z.union([MapMarkerOrderByWithAggregationInputObjectSchema, MapMarkerOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MapMarkerScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MapMarkerScalarFieldEnumSchema), _count: z.union([ z.literal(true), MapMarkerCountAggregateInputObjectSchema ]).optional(), _min: MapMarkerMinAggregateInputObjectSchema.optional(), _max: MapMarkerMaxAggregateInputObjectSchema.optional(), _avg: MapMarkerAvgAggregateInputObjectSchema.optional(), _sum: MapMarkerSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MapMarkerGroupByArgs>;

export const MapMarkerGroupByZodSchema = z.object({ where: MapMarkerWhereInputObjectSchema.optional(), orderBy: z.union([MapMarkerOrderByWithAggregationInputObjectSchema, MapMarkerOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MapMarkerScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MapMarkerScalarFieldEnumSchema), _count: z.union([ z.literal(true), MapMarkerCountAggregateInputObjectSchema ]).optional(), _min: MapMarkerMinAggregateInputObjectSchema.optional(), _max: MapMarkerMaxAggregateInputObjectSchema.optional(), _avg: MapMarkerAvgAggregateInputObjectSchema.optional(), _sum: MapMarkerSumAggregateInputObjectSchema.optional() }).strict();