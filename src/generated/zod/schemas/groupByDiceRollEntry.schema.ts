import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiceRollEntryWhereInputObjectSchema } from './objects/DiceRollEntryWhereInput.schema';
import { DiceRollEntryOrderByWithAggregationInputObjectSchema } from './objects/DiceRollEntryOrderByWithAggregationInput.schema';
import { DiceRollEntryScalarWhereWithAggregatesInputObjectSchema } from './objects/DiceRollEntryScalarWhereWithAggregatesInput.schema';
import { DiceRollEntryScalarFieldEnumSchema } from './enums/DiceRollEntryScalarFieldEnum.schema';
import { DiceRollEntryCountAggregateInputObjectSchema } from './objects/DiceRollEntryCountAggregateInput.schema';
import { DiceRollEntryMinAggregateInputObjectSchema } from './objects/DiceRollEntryMinAggregateInput.schema';
import { DiceRollEntryMaxAggregateInputObjectSchema } from './objects/DiceRollEntryMaxAggregateInput.schema';
import { DiceRollEntryAvgAggregateInputObjectSchema } from './objects/DiceRollEntryAvgAggregateInput.schema';
import { DiceRollEntrySumAggregateInputObjectSchema } from './objects/DiceRollEntrySumAggregateInput.schema';

export const DiceRollEntryGroupBySchema: z.ZodType<Prisma.DiceRollEntryGroupByArgs> = z.object({ where: DiceRollEntryWhereInputObjectSchema.optional(), orderBy: z.union([DiceRollEntryOrderByWithAggregationInputObjectSchema, DiceRollEntryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DiceRollEntryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DiceRollEntryScalarFieldEnumSchema), _count: z.union([ z.literal(true), DiceRollEntryCountAggregateInputObjectSchema ]).optional(), _min: DiceRollEntryMinAggregateInputObjectSchema.optional(), _max: DiceRollEntryMaxAggregateInputObjectSchema.optional(), _avg: DiceRollEntryAvgAggregateInputObjectSchema.optional(), _sum: DiceRollEntrySumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryGroupByArgs>;

export const DiceRollEntryGroupByZodSchema = z.object({ where: DiceRollEntryWhereInputObjectSchema.optional(), orderBy: z.union([DiceRollEntryOrderByWithAggregationInputObjectSchema, DiceRollEntryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DiceRollEntryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DiceRollEntryScalarFieldEnumSchema), _count: z.union([ z.literal(true), DiceRollEntryCountAggregateInputObjectSchema ]).optional(), _min: DiceRollEntryMinAggregateInputObjectSchema.optional(), _max: DiceRollEntryMaxAggregateInputObjectSchema.optional(), _avg: DiceRollEntryAvgAggregateInputObjectSchema.optional(), _sum: DiceRollEntrySumAggregateInputObjectSchema.optional() }).strict();