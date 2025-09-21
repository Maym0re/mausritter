import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';
import { GameTimeOrderByWithAggregationInputObjectSchema } from './objects/GameTimeOrderByWithAggregationInput.schema';
import { GameTimeScalarWhereWithAggregatesInputObjectSchema } from './objects/GameTimeScalarWhereWithAggregatesInput.schema';
import { GameTimeScalarFieldEnumSchema } from './enums/GameTimeScalarFieldEnum.schema';
import { GameTimeCountAggregateInputObjectSchema } from './objects/GameTimeCountAggregateInput.schema';
import { GameTimeMinAggregateInputObjectSchema } from './objects/GameTimeMinAggregateInput.schema';
import { GameTimeMaxAggregateInputObjectSchema } from './objects/GameTimeMaxAggregateInput.schema';
import { GameTimeAvgAggregateInputObjectSchema } from './objects/GameTimeAvgAggregateInput.schema';
import { GameTimeSumAggregateInputObjectSchema } from './objects/GameTimeSumAggregateInput.schema';

export const GameTimeGroupBySchema: z.ZodType<Prisma.GameTimeGroupByArgs> = z.object({ where: GameTimeWhereInputObjectSchema.optional(), orderBy: z.union([GameTimeOrderByWithAggregationInputObjectSchema, GameTimeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GameTimeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GameTimeScalarFieldEnumSchema), _count: z.union([ z.literal(true), GameTimeCountAggregateInputObjectSchema ]).optional(), _min: GameTimeMinAggregateInputObjectSchema.optional(), _max: GameTimeMaxAggregateInputObjectSchema.optional(), _avg: GameTimeAvgAggregateInputObjectSchema.optional(), _sum: GameTimeSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameTimeGroupByArgs>;

export const GameTimeGroupByZodSchema = z.object({ where: GameTimeWhereInputObjectSchema.optional(), orderBy: z.union([GameTimeOrderByWithAggregationInputObjectSchema, GameTimeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GameTimeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GameTimeScalarFieldEnumSchema), _count: z.union([ z.literal(true), GameTimeCountAggregateInputObjectSchema ]).optional(), _min: GameTimeMinAggregateInputObjectSchema.optional(), _max: GameTimeMaxAggregateInputObjectSchema.optional(), _avg: GameTimeAvgAggregateInputObjectSchema.optional(), _sum: GameTimeSumAggregateInputObjectSchema.optional() }).strict();