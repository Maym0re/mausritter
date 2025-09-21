import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexCellOrderByWithRelationInputObjectSchema } from './objects/HexCellOrderByWithRelationInput.schema';
import { HexCellWhereInputObjectSchema } from './objects/HexCellWhereInput.schema';
import { HexCellWhereUniqueInputObjectSchema } from './objects/HexCellWhereUniqueInput.schema';
import { HexCellCountAggregateInputObjectSchema } from './objects/HexCellCountAggregateInput.schema';
import { HexCellMinAggregateInputObjectSchema } from './objects/HexCellMinAggregateInput.schema';
import { HexCellMaxAggregateInputObjectSchema } from './objects/HexCellMaxAggregateInput.schema';
import { HexCellAvgAggregateInputObjectSchema } from './objects/HexCellAvgAggregateInput.schema';
import { HexCellSumAggregateInputObjectSchema } from './objects/HexCellSumAggregateInput.schema';

export const HexCellAggregateSchema: z.ZodType<Prisma.HexCellAggregateArgs> = z.object({ orderBy: z.union([HexCellOrderByWithRelationInputObjectSchema, HexCellOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexCellWhereInputObjectSchema.optional(), cursor: HexCellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), HexCellCountAggregateInputObjectSchema ]).optional(), _min: HexCellMinAggregateInputObjectSchema.optional(), _max: HexCellMaxAggregateInputObjectSchema.optional(), _avg: HexCellAvgAggregateInputObjectSchema.optional(), _sum: HexCellSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexCellAggregateArgs>;

export const HexCellAggregateZodSchema = z.object({ orderBy: z.union([HexCellOrderByWithRelationInputObjectSchema, HexCellOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexCellWhereInputObjectSchema.optional(), cursor: HexCellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), HexCellCountAggregateInputObjectSchema ]).optional(), _min: HexCellMinAggregateInputObjectSchema.optional(), _max: HexCellMaxAggregateInputObjectSchema.optional(), _avg: HexCellAvgAggregateInputObjectSchema.optional(), _sum: HexCellSumAggregateInputObjectSchema.optional() }).strict();