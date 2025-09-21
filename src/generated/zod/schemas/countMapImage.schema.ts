import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapImageOrderByWithRelationInputObjectSchema } from './objects/MapImageOrderByWithRelationInput.schema';
import { MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';
import { MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';
import { MapImageCountAggregateInputObjectSchema } from './objects/MapImageCountAggregateInput.schema';

export const MapImageCountSchema: z.ZodType<Prisma.MapImageCountArgs> = z.object({ orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MapImageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MapImageCountArgs>;

export const MapImageCountZodSchema = z.object({ orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MapImageCountAggregateInputObjectSchema ]).optional() }).strict();