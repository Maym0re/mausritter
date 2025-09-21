import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiceRollLogOrderByWithRelationInputObjectSchema } from './objects/DiceRollLogOrderByWithRelationInput.schema';
import { DiceRollLogWhereInputObjectSchema } from './objects/DiceRollLogWhereInput.schema';
import { DiceRollLogWhereUniqueInputObjectSchema } from './objects/DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogCountAggregateInputObjectSchema } from './objects/DiceRollLogCountAggregateInput.schema';
import { DiceRollLogMinAggregateInputObjectSchema } from './objects/DiceRollLogMinAggregateInput.schema';
import { DiceRollLogMaxAggregateInputObjectSchema } from './objects/DiceRollLogMaxAggregateInput.schema';
import { DiceRollLogAvgAggregateInputObjectSchema } from './objects/DiceRollLogAvgAggregateInput.schema';
import { DiceRollLogSumAggregateInputObjectSchema } from './objects/DiceRollLogSumAggregateInput.schema';

export const DiceRollLogAggregateSchema: z.ZodType<Prisma.DiceRollLogAggregateArgs> = z.object({ orderBy: z.union([DiceRollLogOrderByWithRelationInputObjectSchema, DiceRollLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollLogWhereInputObjectSchema.optional(), cursor: DiceRollLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DiceRollLogCountAggregateInputObjectSchema ]).optional(), _min: DiceRollLogMinAggregateInputObjectSchema.optional(), _max: DiceRollLogMaxAggregateInputObjectSchema.optional(), _avg: DiceRollLogAvgAggregateInputObjectSchema.optional(), _sum: DiceRollLogSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollLogAggregateArgs>;

export const DiceRollLogAggregateZodSchema = z.object({ orderBy: z.union([DiceRollLogOrderByWithRelationInputObjectSchema, DiceRollLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollLogWhereInputObjectSchema.optional(), cursor: DiceRollLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DiceRollLogCountAggregateInputObjectSchema ]).optional(), _min: DiceRollLogMinAggregateInputObjectSchema.optional(), _max: DiceRollLogMaxAggregateInputObjectSchema.optional(), _avg: DiceRollLogAvgAggregateInputObjectSchema.optional(), _sum: DiceRollLogSumAggregateInputObjectSchema.optional() }).strict();