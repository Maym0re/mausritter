import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CoatOrderByWithRelationInputObjectSchema } from './objects/CoatOrderByWithRelationInput.schema';
import { CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';
import { CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';
import { CoatCountAggregateInputObjectSchema } from './objects/CoatCountAggregateInput.schema';
import { CoatMinAggregateInputObjectSchema } from './objects/CoatMinAggregateInput.schema';
import { CoatMaxAggregateInputObjectSchema } from './objects/CoatMaxAggregateInput.schema';

export const CoatAggregateSchema: z.ZodType<Prisma.CoatAggregateArgs> = z.object({ orderBy: z.union([CoatOrderByWithRelationInputObjectSchema, CoatOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoatWhereInputObjectSchema.optional(), cursor: CoatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CoatCountAggregateInputObjectSchema ]).optional(), _min: CoatMinAggregateInputObjectSchema.optional(), _max: CoatMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CoatAggregateArgs>;

export const CoatAggregateZodSchema = z.object({ orderBy: z.union([CoatOrderByWithRelationInputObjectSchema, CoatOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoatWhereInputObjectSchema.optional(), cursor: CoatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CoatCountAggregateInputObjectSchema ]).optional(), _min: CoatMinAggregateInputObjectSchema.optional(), _max: CoatMaxAggregateInputObjectSchema.optional() }).strict();