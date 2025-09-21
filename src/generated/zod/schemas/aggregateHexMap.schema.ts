import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexMapOrderByWithRelationInputObjectSchema } from './objects/HexMapOrderByWithRelationInput.schema';
import { HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';
import { HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';
import { HexMapCountAggregateInputObjectSchema } from './objects/HexMapCountAggregateInput.schema';
import { HexMapMinAggregateInputObjectSchema } from './objects/HexMapMinAggregateInput.schema';
import { HexMapMaxAggregateInputObjectSchema } from './objects/HexMapMaxAggregateInput.schema';
import { HexMapAvgAggregateInputObjectSchema } from './objects/HexMapAvgAggregateInput.schema';
import { HexMapSumAggregateInputObjectSchema } from './objects/HexMapSumAggregateInput.schema';

export const HexMapAggregateSchema: z.ZodType<Prisma.HexMapAggregateArgs> = z.object({ orderBy: z.union([HexMapOrderByWithRelationInputObjectSchema, HexMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexMapWhereInputObjectSchema.optional(), cursor: HexMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), HexMapCountAggregateInputObjectSchema ]).optional(), _min: HexMapMinAggregateInputObjectSchema.optional(), _max: HexMapMaxAggregateInputObjectSchema.optional(), _avg: HexMapAvgAggregateInputObjectSchema.optional(), _sum: HexMapSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexMapAggregateArgs>;

export const HexMapAggregateZodSchema = z.object({ orderBy: z.union([HexMapOrderByWithRelationInputObjectSchema, HexMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexMapWhereInputObjectSchema.optional(), cursor: HexMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), HexMapCountAggregateInputObjectSchema ]).optional(), _min: HexMapMinAggregateInputObjectSchema.optional(), _max: HexMapMaxAggregateInputObjectSchema.optional(), _avg: HexMapAvgAggregateInputObjectSchema.optional(), _sum: HexMapSumAggregateInputObjectSchema.optional() }).strict();