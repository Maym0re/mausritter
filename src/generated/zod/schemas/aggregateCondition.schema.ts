import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionOrderByWithRelationInputObjectSchema as ConditionOrderByWithRelationInputObjectSchema } from './objects/ConditionOrderByWithRelationInput.schema';
import { ConditionWhereInputObjectSchema as ConditionWhereInputObjectSchema } from './objects/ConditionWhereInput.schema';
import { ConditionWhereUniqueInputObjectSchema as ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';
import { ConditionCountAggregateInputObjectSchema as ConditionCountAggregateInputObjectSchema } from './objects/ConditionCountAggregateInput.schema';
import { ConditionMinAggregateInputObjectSchema as ConditionMinAggregateInputObjectSchema } from './objects/ConditionMinAggregateInput.schema';
import { ConditionMaxAggregateInputObjectSchema as ConditionMaxAggregateInputObjectSchema } from './objects/ConditionMaxAggregateInput.schema';

export const ConditionAggregateSchema: z.ZodType<Prisma.ConditionAggregateArgs> = z.object({ orderBy: z.union([ConditionOrderByWithRelationInputObjectSchema, ConditionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConditionWhereInputObjectSchema.optional(), cursor: ConditionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ConditionCountAggregateInputObjectSchema ]).optional(), _min: ConditionMinAggregateInputObjectSchema.optional(), _max: ConditionMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConditionAggregateArgs>;

export const ConditionAggregateZodSchema = z.object({ orderBy: z.union([ConditionOrderByWithRelationInputObjectSchema, ConditionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConditionWhereInputObjectSchema.optional(), cursor: ConditionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ConditionCountAggregateInputObjectSchema ]).optional(), _min: ConditionMinAggregateInputObjectSchema.optional(), _max: ConditionMaxAggregateInputObjectSchema.optional() }).strict();