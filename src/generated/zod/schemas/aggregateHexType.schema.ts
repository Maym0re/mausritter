import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexTypeOrderByWithRelationInputObjectSchema } from './objects/HexTypeOrderByWithRelationInput.schema';
import { HexTypeWhereInputObjectSchema } from './objects/HexTypeWhereInput.schema';
import { HexTypeWhereUniqueInputObjectSchema } from './objects/HexTypeWhereUniqueInput.schema';
import { HexTypeCountAggregateInputObjectSchema } from './objects/HexTypeCountAggregateInput.schema';
import { HexTypeMinAggregateInputObjectSchema } from './objects/HexTypeMinAggregateInput.schema';
import { HexTypeMaxAggregateInputObjectSchema } from './objects/HexTypeMaxAggregateInput.schema';

export const HexTypeAggregateSchema: z.ZodType<Prisma.HexTypeAggregateArgs> = z.object({ orderBy: z.union([HexTypeOrderByWithRelationInputObjectSchema, HexTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexTypeWhereInputObjectSchema.optional(), cursor: HexTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), HexTypeCountAggregateInputObjectSchema ]).optional(), _min: HexTypeMinAggregateInputObjectSchema.optional(), _max: HexTypeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexTypeAggregateArgs>;

export const HexTypeAggregateZodSchema = z.object({ orderBy: z.union([HexTypeOrderByWithRelationInputObjectSchema, HexTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexTypeWhereInputObjectSchema.optional(), cursor: HexTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), HexTypeCountAggregateInputObjectSchema ]).optional(), _min: HexTypeMinAggregateInputObjectSchema.optional(), _max: HexTypeMaxAggregateInputObjectSchema.optional() }).strict();