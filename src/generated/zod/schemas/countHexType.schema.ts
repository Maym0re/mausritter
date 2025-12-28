import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeOrderByWithRelationInputObjectSchema as HexTypeOrderByWithRelationInputObjectSchema } from './objects/HexTypeOrderByWithRelationInput.schema';
import { HexTypeWhereInputObjectSchema as HexTypeWhereInputObjectSchema } from './objects/HexTypeWhereInput.schema';
import { HexTypeWhereUniqueInputObjectSchema as HexTypeWhereUniqueInputObjectSchema } from './objects/HexTypeWhereUniqueInput.schema';
import { HexTypeCountAggregateInputObjectSchema as HexTypeCountAggregateInputObjectSchema } from './objects/HexTypeCountAggregateInput.schema';

export const HexTypeCountSchema: z.ZodType<Prisma.HexTypeCountArgs> = z.object({ orderBy: z.union([HexTypeOrderByWithRelationInputObjectSchema, HexTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexTypeWhereInputObjectSchema.optional(), cursor: HexTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HexTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.HexTypeCountArgs>;

export const HexTypeCountZodSchema = z.object({ orderBy: z.union([HexTypeOrderByWithRelationInputObjectSchema, HexTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexTypeWhereInputObjectSchema.optional(), cursor: HexTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HexTypeCountAggregateInputObjectSchema ]).optional() }).strict();