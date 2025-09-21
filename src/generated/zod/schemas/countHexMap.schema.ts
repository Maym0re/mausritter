import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexMapOrderByWithRelationInputObjectSchema } from './objects/HexMapOrderByWithRelationInput.schema';
import { HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';
import { HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';
import { HexMapCountAggregateInputObjectSchema } from './objects/HexMapCountAggregateInput.schema';

export const HexMapCountSchema: z.ZodType<Prisma.HexMapCountArgs> = z.object({ orderBy: z.union([HexMapOrderByWithRelationInputObjectSchema, HexMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexMapWhereInputObjectSchema.optional(), cursor: HexMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HexMapCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.HexMapCountArgs>;

export const HexMapCountZodSchema = z.object({ orderBy: z.union([HexMapOrderByWithRelationInputObjectSchema, HexMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexMapWhereInputObjectSchema.optional(), cursor: HexMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HexMapCountAggregateInputObjectSchema ]).optional() }).strict();