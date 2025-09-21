import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { GameTimeOrderByWithRelationInputObjectSchema } from './objects/GameTimeOrderByWithRelationInput.schema';
import { GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';
import { GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';
import { GameTimeCountAggregateInputObjectSchema } from './objects/GameTimeCountAggregateInput.schema';
import { GameTimeMinAggregateInputObjectSchema } from './objects/GameTimeMinAggregateInput.schema';
import { GameTimeMaxAggregateInputObjectSchema } from './objects/GameTimeMaxAggregateInput.schema';
import { GameTimeAvgAggregateInputObjectSchema } from './objects/GameTimeAvgAggregateInput.schema';
import { GameTimeSumAggregateInputObjectSchema } from './objects/GameTimeSumAggregateInput.schema';

export const GameTimeAggregateSchema: z.ZodType<Prisma.GameTimeAggregateArgs> = z.object({ orderBy: z.union([GameTimeOrderByWithRelationInputObjectSchema, GameTimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameTimeWhereInputObjectSchema.optional(), cursor: GameTimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GameTimeCountAggregateInputObjectSchema ]).optional(), _min: GameTimeMinAggregateInputObjectSchema.optional(), _max: GameTimeMaxAggregateInputObjectSchema.optional(), _avg: GameTimeAvgAggregateInputObjectSchema.optional(), _sum: GameTimeSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameTimeAggregateArgs>;

export const GameTimeAggregateZodSchema = z.object({ orderBy: z.union([GameTimeOrderByWithRelationInputObjectSchema, GameTimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameTimeWhereInputObjectSchema.optional(), cursor: GameTimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GameTimeCountAggregateInputObjectSchema ]).optional(), _min: GameTimeMinAggregateInputObjectSchema.optional(), _max: GameTimeMaxAggregateInputObjectSchema.optional(), _avg: GameTimeAvgAggregateInputObjectSchema.optional(), _sum: GameTimeSumAggregateInputObjectSchema.optional() }).strict();