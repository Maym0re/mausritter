import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiceRollLogWhereInputObjectSchema } from './objects/DiceRollLogWhereInput.schema';
import { DiceRollLogOrderByWithAggregationInputObjectSchema } from './objects/DiceRollLogOrderByWithAggregationInput.schema';
import { DiceRollLogScalarWhereWithAggregatesInputObjectSchema } from './objects/DiceRollLogScalarWhereWithAggregatesInput.schema';
import { DiceRollLogScalarFieldEnumSchema } from './enums/DiceRollLogScalarFieldEnum.schema';
import { DiceRollLogCountAggregateInputObjectSchema } from './objects/DiceRollLogCountAggregateInput.schema';
import { DiceRollLogMinAggregateInputObjectSchema } from './objects/DiceRollLogMinAggregateInput.schema';
import { DiceRollLogMaxAggregateInputObjectSchema } from './objects/DiceRollLogMaxAggregateInput.schema';
import { DiceRollLogAvgAggregateInputObjectSchema } from './objects/DiceRollLogAvgAggregateInput.schema';
import { DiceRollLogSumAggregateInputObjectSchema } from './objects/DiceRollLogSumAggregateInput.schema';

export const DiceRollLogGroupBySchema: z.ZodType<Prisma.DiceRollLogGroupByArgs> = z.object({ where: DiceRollLogWhereInputObjectSchema.optional(), orderBy: z.union([DiceRollLogOrderByWithAggregationInputObjectSchema, DiceRollLogOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DiceRollLogScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DiceRollLogScalarFieldEnumSchema), _count: z.union([ z.literal(true), DiceRollLogCountAggregateInputObjectSchema ]).optional(), _min: DiceRollLogMinAggregateInputObjectSchema.optional(), _max: DiceRollLogMaxAggregateInputObjectSchema.optional(), _avg: DiceRollLogAvgAggregateInputObjectSchema.optional(), _sum: DiceRollLogSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollLogGroupByArgs>;

export const DiceRollLogGroupByZodSchema = z.object({ where: DiceRollLogWhereInputObjectSchema.optional(), orderBy: z.union([DiceRollLogOrderByWithAggregationInputObjectSchema, DiceRollLogOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DiceRollLogScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DiceRollLogScalarFieldEnumSchema), _count: z.union([ z.literal(true), DiceRollLogCountAggregateInputObjectSchema ]).optional(), _min: DiceRollLogMinAggregateInputObjectSchema.optional(), _max: DiceRollLogMaxAggregateInputObjectSchema.optional(), _avg: DiceRollLogAvgAggregateInputObjectSchema.optional(), _sum: DiceRollLogSumAggregateInputObjectSchema.optional() }).strict();