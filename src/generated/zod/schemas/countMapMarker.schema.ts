import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerOrderByWithRelationInputObjectSchema as MapMarkerOrderByWithRelationInputObjectSchema } from './objects/MapMarkerOrderByWithRelationInput.schema';
import { MapMarkerWhereInputObjectSchema as MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';
import { MapMarkerWhereUniqueInputObjectSchema as MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';
import { MapMarkerCountAggregateInputObjectSchema as MapMarkerCountAggregateInputObjectSchema } from './objects/MapMarkerCountAggregateInput.schema';

export const MapMarkerCountSchema: z.ZodType<Prisma.MapMarkerCountArgs> = z.object({ orderBy: z.union([MapMarkerOrderByWithRelationInputObjectSchema, MapMarkerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapMarkerWhereInputObjectSchema.optional(), cursor: MapMarkerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MapMarkerCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MapMarkerCountArgs>;

export const MapMarkerCountZodSchema = z.object({ orderBy: z.union([MapMarkerOrderByWithRelationInputObjectSchema, MapMarkerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapMarkerWhereInputObjectSchema.optional(), cursor: MapMarkerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MapMarkerCountAggregateInputObjectSchema ]).optional() }).strict();