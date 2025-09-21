import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiceRollEntryOrderByWithRelationInputObjectSchema } from './objects/DiceRollEntryOrderByWithRelationInput.schema';
import { DiceRollEntryWhereInputObjectSchema } from './objects/DiceRollEntryWhereInput.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';
import { DiceRollEntryCountAggregateInputObjectSchema } from './objects/DiceRollEntryCountAggregateInput.schema';

export const DiceRollEntryCountSchema: z.ZodType<Prisma.DiceRollEntryCountArgs> = z.object({ orderBy: z.union([DiceRollEntryOrderByWithRelationInputObjectSchema, DiceRollEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollEntryWhereInputObjectSchema.optional(), cursor: DiceRollEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DiceRollEntryCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryCountArgs>;

export const DiceRollEntryCountZodSchema = z.object({ orderBy: z.union([DiceRollEntryOrderByWithRelationInputObjectSchema, DiceRollEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollEntryWhereInputObjectSchema.optional(), cursor: DiceRollEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DiceRollEntryCountAggregateInputObjectSchema ]).optional() }).strict();