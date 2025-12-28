import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageOrderByWithRelationInputObjectSchema as MapImageOrderByWithRelationInputObjectSchema } from './objects/MapImageOrderByWithRelationInput.schema';
import { MapImageWhereInputObjectSchema as MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';
import { MapImageWhereUniqueInputObjectSchema as MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';
import { MapImageCountAggregateInputObjectSchema as MapImageCountAggregateInputObjectSchema } from './objects/MapImageCountAggregateInput.schema';

export const MapImageCountSchema: z.ZodType<Prisma.MapImageCountArgs> = z.object({ orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MapImageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MapImageCountArgs>;

export const MapImageCountZodSchema = z.object({ orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MapImageCountAggregateInputObjectSchema ]).optional() }).strict();