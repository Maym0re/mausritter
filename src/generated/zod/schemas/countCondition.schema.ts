import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConditionOrderByWithRelationInputObjectSchema } from './objects/ConditionOrderByWithRelationInput.schema';
import { ConditionWhereInputObjectSchema } from './objects/ConditionWhereInput.schema';
import { ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';
import { ConditionCountAggregateInputObjectSchema } from './objects/ConditionCountAggregateInput.schema';

export const ConditionCountSchema: z.ZodType<Prisma.ConditionCountArgs> = z.object({ orderBy: z.union([ConditionOrderByWithRelationInputObjectSchema, ConditionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConditionWhereInputObjectSchema.optional(), cursor: ConditionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ConditionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ConditionCountArgs>;

export const ConditionCountZodSchema = z.object({ orderBy: z.union([ConditionOrderByWithRelationInputObjectSchema, ConditionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConditionWhereInputObjectSchema.optional(), cursor: ConditionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ConditionCountAggregateInputObjectSchema ]).optional() }).strict();