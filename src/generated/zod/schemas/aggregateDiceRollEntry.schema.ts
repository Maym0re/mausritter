import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiceRollEntryOrderByWithRelationInputObjectSchema } from './objects/DiceRollEntryOrderByWithRelationInput.schema';
import { DiceRollEntryWhereInputObjectSchema } from './objects/DiceRollEntryWhereInput.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';
import { DiceRollEntryCountAggregateInputObjectSchema } from './objects/DiceRollEntryCountAggregateInput.schema';
import { DiceRollEntryMinAggregateInputObjectSchema } from './objects/DiceRollEntryMinAggregateInput.schema';
import { DiceRollEntryMaxAggregateInputObjectSchema } from './objects/DiceRollEntryMaxAggregateInput.schema';
import { DiceRollEntryAvgAggregateInputObjectSchema } from './objects/DiceRollEntryAvgAggregateInput.schema';
import { DiceRollEntrySumAggregateInputObjectSchema } from './objects/DiceRollEntrySumAggregateInput.schema';

export const DiceRollEntryAggregateSchema: z.ZodType<Prisma.DiceRollEntryAggregateArgs> = z.object({ orderBy: z.union([DiceRollEntryOrderByWithRelationInputObjectSchema, DiceRollEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollEntryWhereInputObjectSchema.optional(), cursor: DiceRollEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DiceRollEntryCountAggregateInputObjectSchema ]).optional(), _min: DiceRollEntryMinAggregateInputObjectSchema.optional(), _max: DiceRollEntryMaxAggregateInputObjectSchema.optional(), _avg: DiceRollEntryAvgAggregateInputObjectSchema.optional(), _sum: DiceRollEntrySumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryAggregateArgs>;

export const DiceRollEntryAggregateZodSchema = z.object({ orderBy: z.union([DiceRollEntryOrderByWithRelationInputObjectSchema, DiceRollEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollEntryWhereInputObjectSchema.optional(), cursor: DiceRollEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DiceRollEntryCountAggregateInputObjectSchema ]).optional(), _min: DiceRollEntryMinAggregateInputObjectSchema.optional(), _max: DiceRollEntryMaxAggregateInputObjectSchema.optional(), _avg: DiceRollEntryAvgAggregateInputObjectSchema.optional(), _sum: DiceRollEntrySumAggregateInputObjectSchema.optional() }).strict();