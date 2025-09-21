import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexCellWhereInputObjectSchema } from './objects/HexCellWhereInput.schema';
import { HexCellOrderByWithAggregationInputObjectSchema } from './objects/HexCellOrderByWithAggregationInput.schema';
import { HexCellScalarWhereWithAggregatesInputObjectSchema } from './objects/HexCellScalarWhereWithAggregatesInput.schema';
import { HexCellScalarFieldEnumSchema } from './enums/HexCellScalarFieldEnum.schema';
import { HexCellCountAggregateInputObjectSchema } from './objects/HexCellCountAggregateInput.schema';
import { HexCellMinAggregateInputObjectSchema } from './objects/HexCellMinAggregateInput.schema';
import { HexCellMaxAggregateInputObjectSchema } from './objects/HexCellMaxAggregateInput.schema';
import { HexCellAvgAggregateInputObjectSchema } from './objects/HexCellAvgAggregateInput.schema';
import { HexCellSumAggregateInputObjectSchema } from './objects/HexCellSumAggregateInput.schema';

export const HexCellGroupBySchema: z.ZodType<Prisma.HexCellGroupByArgs> = z.object({ where: HexCellWhereInputObjectSchema.optional(), orderBy: z.union([HexCellOrderByWithAggregationInputObjectSchema, HexCellOrderByWithAggregationInputObjectSchema.array()]).optional(), having: HexCellScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(HexCellScalarFieldEnumSchema), _count: z.union([ z.literal(true), HexCellCountAggregateInputObjectSchema ]).optional(), _min: HexCellMinAggregateInputObjectSchema.optional(), _max: HexCellMaxAggregateInputObjectSchema.optional(), _avg: HexCellAvgAggregateInputObjectSchema.optional(), _sum: HexCellSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexCellGroupByArgs>;

export const HexCellGroupByZodSchema = z.object({ where: HexCellWhereInputObjectSchema.optional(), orderBy: z.union([HexCellOrderByWithAggregationInputObjectSchema, HexCellOrderByWithAggregationInputObjectSchema.array()]).optional(), having: HexCellScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(HexCellScalarFieldEnumSchema), _count: z.union([ z.literal(true), HexCellCountAggregateInputObjectSchema ]).optional(), _min: HexCellMinAggregateInputObjectSchema.optional(), _max: HexCellMaxAggregateInputObjectSchema.optional(), _avg: HexCellAvgAggregateInputObjectSchema.optional(), _sum: HexCellSumAggregateInputObjectSchema.optional() }).strict();