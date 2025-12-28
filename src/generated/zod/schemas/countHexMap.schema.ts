import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapOrderByWithRelationInputObjectSchema as HexMapOrderByWithRelationInputObjectSchema } from './objects/HexMapOrderByWithRelationInput.schema';
import { HexMapWhereInputObjectSchema as HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';
import { HexMapCountAggregateInputObjectSchema as HexMapCountAggregateInputObjectSchema } from './objects/HexMapCountAggregateInput.schema';

export const HexMapCountSchema: z.ZodType<Prisma.HexMapCountArgs> = z.object({ orderBy: z.union([HexMapOrderByWithRelationInputObjectSchema, HexMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexMapWhereInputObjectSchema.optional(), cursor: HexMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HexMapCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.HexMapCountArgs>;

export const HexMapCountZodSchema = z.object({ orderBy: z.union([HexMapOrderByWithRelationInputObjectSchema, HexMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexMapWhereInputObjectSchema.optional(), cursor: HexMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HexMapCountAggregateInputObjectSchema ]).optional() }).strict();