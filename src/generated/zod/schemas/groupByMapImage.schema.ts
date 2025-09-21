import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';
import { MapImageOrderByWithAggregationInputObjectSchema } from './objects/MapImageOrderByWithAggregationInput.schema';
import { MapImageScalarWhereWithAggregatesInputObjectSchema } from './objects/MapImageScalarWhereWithAggregatesInput.schema';
import { MapImageScalarFieldEnumSchema } from './enums/MapImageScalarFieldEnum.schema';
import { MapImageCountAggregateInputObjectSchema } from './objects/MapImageCountAggregateInput.schema';
import { MapImageMinAggregateInputObjectSchema } from './objects/MapImageMinAggregateInput.schema';
import { MapImageMaxAggregateInputObjectSchema } from './objects/MapImageMaxAggregateInput.schema';
import { MapImageAvgAggregateInputObjectSchema } from './objects/MapImageAvgAggregateInput.schema';
import { MapImageSumAggregateInputObjectSchema } from './objects/MapImageSumAggregateInput.schema';

export const MapImageGroupBySchema: z.ZodType<Prisma.MapImageGroupByArgs> = z.object({ where: MapImageWhereInputObjectSchema.optional(), orderBy: z.union([MapImageOrderByWithAggregationInputObjectSchema, MapImageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MapImageScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MapImageScalarFieldEnumSchema), _count: z.union([ z.literal(true), MapImageCountAggregateInputObjectSchema ]).optional(), _min: MapImageMinAggregateInputObjectSchema.optional(), _max: MapImageMaxAggregateInputObjectSchema.optional(), _avg: MapImageAvgAggregateInputObjectSchema.optional(), _sum: MapImageSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MapImageGroupByArgs>;

export const MapImageGroupByZodSchema = z.object({ where: MapImageWhereInputObjectSchema.optional(), orderBy: z.union([MapImageOrderByWithAggregationInputObjectSchema, MapImageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MapImageScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MapImageScalarFieldEnumSchema), _count: z.union([ z.literal(true), MapImageCountAggregateInputObjectSchema ]).optional(), _min: MapImageMinAggregateInputObjectSchema.optional(), _max: MapImageMaxAggregateInputObjectSchema.optional(), _avg: MapImageAvgAggregateInputObjectSchema.optional(), _sum: MapImageSumAggregateInputObjectSchema.optional() }).strict();