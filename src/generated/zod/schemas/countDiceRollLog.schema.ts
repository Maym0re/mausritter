import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollLogOrderByWithRelationInputObjectSchema as DiceRollLogOrderByWithRelationInputObjectSchema } from './objects/DiceRollLogOrderByWithRelationInput.schema';
import { DiceRollLogWhereInputObjectSchema as DiceRollLogWhereInputObjectSchema } from './objects/DiceRollLogWhereInput.schema';
import { DiceRollLogWhereUniqueInputObjectSchema as DiceRollLogWhereUniqueInputObjectSchema } from './objects/DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogCountAggregateInputObjectSchema as DiceRollLogCountAggregateInputObjectSchema } from './objects/DiceRollLogCountAggregateInput.schema';

export const DiceRollLogCountSchema: z.ZodType<Prisma.DiceRollLogCountArgs> = z.object({ orderBy: z.union([DiceRollLogOrderByWithRelationInputObjectSchema, DiceRollLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollLogWhereInputObjectSchema.optional(), cursor: DiceRollLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DiceRollLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollLogCountArgs>;

export const DiceRollLogCountZodSchema = z.object({ orderBy: z.union([DiceRollLogOrderByWithRelationInputObjectSchema, DiceRollLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollLogWhereInputObjectSchema.optional(), cursor: DiceRollLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DiceRollLogCountAggregateInputObjectSchema ]).optional() }).strict();