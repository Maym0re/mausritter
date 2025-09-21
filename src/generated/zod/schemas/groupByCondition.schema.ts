import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConditionWhereInputObjectSchema } from './objects/ConditionWhereInput.schema';
import { ConditionOrderByWithAggregationInputObjectSchema } from './objects/ConditionOrderByWithAggregationInput.schema';
import { ConditionScalarWhereWithAggregatesInputObjectSchema } from './objects/ConditionScalarWhereWithAggregatesInput.schema';
import { ConditionScalarFieldEnumSchema } from './enums/ConditionScalarFieldEnum.schema';
import { ConditionCountAggregateInputObjectSchema } from './objects/ConditionCountAggregateInput.schema';
import { ConditionMinAggregateInputObjectSchema } from './objects/ConditionMinAggregateInput.schema';
import { ConditionMaxAggregateInputObjectSchema } from './objects/ConditionMaxAggregateInput.schema';

export const ConditionGroupBySchema: z.ZodType<Prisma.ConditionGroupByArgs> = z.object({ where: ConditionWhereInputObjectSchema.optional(), orderBy: z.union([ConditionOrderByWithAggregationInputObjectSchema, ConditionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ConditionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ConditionScalarFieldEnumSchema), _count: z.union([ z.literal(true), ConditionCountAggregateInputObjectSchema ]).optional(), _min: ConditionMinAggregateInputObjectSchema.optional(), _max: ConditionMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConditionGroupByArgs>;

export const ConditionGroupByZodSchema = z.object({ where: ConditionWhereInputObjectSchema.optional(), orderBy: z.union([ConditionOrderByWithAggregationInputObjectSchema, ConditionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ConditionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ConditionScalarFieldEnumSchema), _count: z.union([ z.literal(true), ConditionCountAggregateInputObjectSchema ]).optional(), _min: ConditionMinAggregateInputObjectSchema.optional(), _max: ConditionMaxAggregateInputObjectSchema.optional() }).strict();