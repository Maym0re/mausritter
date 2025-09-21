import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { GameTimeOrderByWithRelationInputObjectSchema } from './objects/GameTimeOrderByWithRelationInput.schema';
import { GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';
import { GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';
import { GameTimeCountAggregateInputObjectSchema } from './objects/GameTimeCountAggregateInput.schema';

export const GameTimeCountSchema: z.ZodType<Prisma.GameTimeCountArgs> = z.object({ orderBy: z.union([GameTimeOrderByWithRelationInputObjectSchema, GameTimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameTimeWhereInputObjectSchema.optional(), cursor: GameTimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GameTimeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GameTimeCountArgs>;

export const GameTimeCountZodSchema = z.object({ orderBy: z.union([GameTimeOrderByWithRelationInputObjectSchema, GameTimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameTimeWhereInputObjectSchema.optional(), cursor: GameTimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GameTimeCountAggregateInputObjectSchema ]).optional() }).strict();