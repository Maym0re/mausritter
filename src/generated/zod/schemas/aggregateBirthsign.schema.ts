import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignOrderByWithRelationInputObjectSchema as BirthsignOrderByWithRelationInputObjectSchema } from './objects/BirthsignOrderByWithRelationInput.schema';
import { BirthsignWhereInputObjectSchema as BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';
import { BirthsignWhereUniqueInputObjectSchema as BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';
import { BirthsignCountAggregateInputObjectSchema as BirthsignCountAggregateInputObjectSchema } from './objects/BirthsignCountAggregateInput.schema';
import { BirthsignMinAggregateInputObjectSchema as BirthsignMinAggregateInputObjectSchema } from './objects/BirthsignMinAggregateInput.schema';
import { BirthsignMaxAggregateInputObjectSchema as BirthsignMaxAggregateInputObjectSchema } from './objects/BirthsignMaxAggregateInput.schema';

export const BirthsignAggregateSchema: z.ZodType<Prisma.BirthsignAggregateArgs> = z.object({ orderBy: z.union([BirthsignOrderByWithRelationInputObjectSchema, BirthsignOrderByWithRelationInputObjectSchema.array()]).optional(), where: BirthsignWhereInputObjectSchema.optional(), cursor: BirthsignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BirthsignCountAggregateInputObjectSchema ]).optional(), _min: BirthsignMinAggregateInputObjectSchema.optional(), _max: BirthsignMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignAggregateArgs>;

export const BirthsignAggregateZodSchema = z.object({ orderBy: z.union([BirthsignOrderByWithRelationInputObjectSchema, BirthsignOrderByWithRelationInputObjectSchema.array()]).optional(), where: BirthsignWhereInputObjectSchema.optional(), cursor: BirthsignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BirthsignCountAggregateInputObjectSchema ]).optional(), _min: BirthsignMinAggregateInputObjectSchema.optional(), _max: BirthsignMaxAggregateInputObjectSchema.optional() }).strict();