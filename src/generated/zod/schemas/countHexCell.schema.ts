import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexCellOrderByWithRelationInputObjectSchema as HexCellOrderByWithRelationInputObjectSchema } from './objects/HexCellOrderByWithRelationInput.schema';
import { HexCellWhereInputObjectSchema as HexCellWhereInputObjectSchema } from './objects/HexCellWhereInput.schema';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './objects/HexCellWhereUniqueInput.schema';
import { HexCellCountAggregateInputObjectSchema as HexCellCountAggregateInputObjectSchema } from './objects/HexCellCountAggregateInput.schema';

export const HexCellCountSchema: z.ZodType<Prisma.HexCellCountArgs> = z.object({ orderBy: z.union([HexCellOrderByWithRelationInputObjectSchema, HexCellOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexCellWhereInputObjectSchema.optional(), cursor: HexCellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HexCellCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.HexCellCountArgs>;

export const HexCellCountZodSchema = z.object({ orderBy: z.union([HexCellOrderByWithRelationInputObjectSchema, HexCellOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexCellWhereInputObjectSchema.optional(), cursor: HexCellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HexCellCountAggregateInputObjectSchema ]).optional() }).strict();