import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapOrderByWithRelationInputObjectSchema as HexMapOrderByWithRelationInputObjectSchema } from './objects/HexMapOrderByWithRelationInput.schema';
import { HexMapWhereInputObjectSchema as HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';
import { HexMapCountAggregateInputObjectSchema as HexMapCountAggregateInputObjectSchema } from './objects/HexMapCountAggregateInput.schema';
import { HexMapMinAggregateInputObjectSchema as HexMapMinAggregateInputObjectSchema } from './objects/HexMapMinAggregateInput.schema';
import { HexMapMaxAggregateInputObjectSchema as HexMapMaxAggregateInputObjectSchema } from './objects/HexMapMaxAggregateInput.schema';
import { HexMapAvgAggregateInputObjectSchema as HexMapAvgAggregateInputObjectSchema } from './objects/HexMapAvgAggregateInput.schema';
import { HexMapSumAggregateInputObjectSchema as HexMapSumAggregateInputObjectSchema } from './objects/HexMapSumAggregateInput.schema';

export const HexMapAggregateSchema: z.ZodType<Prisma.HexMapAggregateArgs> = z.object({ orderBy: z.union([HexMapOrderByWithRelationInputObjectSchema, HexMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexMapWhereInputObjectSchema.optional(), cursor: HexMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), HexMapCountAggregateInputObjectSchema ]).optional(), _min: HexMapMinAggregateInputObjectSchema.optional(), _max: HexMapMaxAggregateInputObjectSchema.optional(), _avg: HexMapAvgAggregateInputObjectSchema.optional(), _sum: HexMapSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexMapAggregateArgs>;

export const HexMapAggregateZodSchema = z.object({ orderBy: z.union([HexMapOrderByWithRelationInputObjectSchema, HexMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexMapWhereInputObjectSchema.optional(), cursor: HexMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), HexMapCountAggregateInputObjectSchema ]).optional(), _min: HexMapMinAggregateInputObjectSchema.optional(), _max: HexMapMaxAggregateInputObjectSchema.optional(), _avg: HexMapAvgAggregateInputObjectSchema.optional(), _sum: HexMapSumAggregateInputObjectSchema.optional() }).strict();