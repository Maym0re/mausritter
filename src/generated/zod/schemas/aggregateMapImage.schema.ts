import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapImageOrderByWithRelationInputObjectSchema } from './objects/MapImageOrderByWithRelationInput.schema';
import { MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';
import { MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';
import { MapImageCountAggregateInputObjectSchema } from './objects/MapImageCountAggregateInput.schema';
import { MapImageMinAggregateInputObjectSchema } from './objects/MapImageMinAggregateInput.schema';
import { MapImageMaxAggregateInputObjectSchema } from './objects/MapImageMaxAggregateInput.schema';
import { MapImageAvgAggregateInputObjectSchema } from './objects/MapImageAvgAggregateInput.schema';
import { MapImageSumAggregateInputObjectSchema } from './objects/MapImageSumAggregateInput.schema';

export const MapImageAggregateSchema: z.ZodType<Prisma.MapImageAggregateArgs> = z.object({ orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MapImageCountAggregateInputObjectSchema ]).optional(), _min: MapImageMinAggregateInputObjectSchema.optional(), _max: MapImageMaxAggregateInputObjectSchema.optional(), _avg: MapImageAvgAggregateInputObjectSchema.optional(), _sum: MapImageSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MapImageAggregateArgs>;

export const MapImageAggregateZodSchema = z.object({ orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MapImageCountAggregateInputObjectSchema ]).optional(), _min: MapImageMinAggregateInputObjectSchema.optional(), _max: MapImageMaxAggregateInputObjectSchema.optional(), _avg: MapImageAvgAggregateInputObjectSchema.optional(), _sum: MapImageSumAggregateInputObjectSchema.optional() }).strict();