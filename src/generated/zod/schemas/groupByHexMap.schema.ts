import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';
import { HexMapOrderByWithAggregationInputObjectSchema } from './objects/HexMapOrderByWithAggregationInput.schema';
import { HexMapScalarWhereWithAggregatesInputObjectSchema } from './objects/HexMapScalarWhereWithAggregatesInput.schema';
import { HexMapScalarFieldEnumSchema } from './enums/HexMapScalarFieldEnum.schema';
import { HexMapCountAggregateInputObjectSchema } from './objects/HexMapCountAggregateInput.schema';
import { HexMapMinAggregateInputObjectSchema } from './objects/HexMapMinAggregateInput.schema';
import { HexMapMaxAggregateInputObjectSchema } from './objects/HexMapMaxAggregateInput.schema';
import { HexMapAvgAggregateInputObjectSchema } from './objects/HexMapAvgAggregateInput.schema';
import { HexMapSumAggregateInputObjectSchema } from './objects/HexMapSumAggregateInput.schema';

export const HexMapGroupBySchema: z.ZodType<Prisma.HexMapGroupByArgs> = z.object({ where: HexMapWhereInputObjectSchema.optional(), orderBy: z.union([HexMapOrderByWithAggregationInputObjectSchema, HexMapOrderByWithAggregationInputObjectSchema.array()]).optional(), having: HexMapScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(HexMapScalarFieldEnumSchema), _count: z.union([ z.literal(true), HexMapCountAggregateInputObjectSchema ]).optional(), _min: HexMapMinAggregateInputObjectSchema.optional(), _max: HexMapMaxAggregateInputObjectSchema.optional(), _avg: HexMapAvgAggregateInputObjectSchema.optional(), _sum: HexMapSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexMapGroupByArgs>;

export const HexMapGroupByZodSchema = z.object({ where: HexMapWhereInputObjectSchema.optional(), orderBy: z.union([HexMapOrderByWithAggregationInputObjectSchema, HexMapOrderByWithAggregationInputObjectSchema.array()]).optional(), having: HexMapScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(HexMapScalarFieldEnumSchema), _count: z.union([ z.literal(true), HexMapCountAggregateInputObjectSchema ]).optional(), _min: HexMapMinAggregateInputObjectSchema.optional(), _max: HexMapMaxAggregateInputObjectSchema.optional(), _avg: HexMapAvgAggregateInputObjectSchema.optional(), _sum: HexMapSumAggregateInputObjectSchema.optional() }).strict();