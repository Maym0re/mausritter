import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BirthsignOrderByWithRelationInputObjectSchema } from './objects/BirthsignOrderByWithRelationInput.schema';
import { BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';
import { BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';
import { BirthsignCountAggregateInputObjectSchema } from './objects/BirthsignCountAggregateInput.schema';
import { BirthsignMinAggregateInputObjectSchema } from './objects/BirthsignMinAggregateInput.schema';
import { BirthsignMaxAggregateInputObjectSchema } from './objects/BirthsignMaxAggregateInput.schema';

export const BirthsignAggregateSchema: z.ZodType<Prisma.BirthsignAggregateArgs> = z.object({ orderBy: z.union([BirthsignOrderByWithRelationInputObjectSchema, BirthsignOrderByWithRelationInputObjectSchema.array()]).optional(), where: BirthsignWhereInputObjectSchema.optional(), cursor: BirthsignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BirthsignCountAggregateInputObjectSchema ]).optional(), _min: BirthsignMinAggregateInputObjectSchema.optional(), _max: BirthsignMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignAggregateArgs>;

export const BirthsignAggregateZodSchema = z.object({ orderBy: z.union([BirthsignOrderByWithRelationInputObjectSchema, BirthsignOrderByWithRelationInputObjectSchema.array()]).optional(), where: BirthsignWhereInputObjectSchema.optional(), cursor: BirthsignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BirthsignCountAggregateInputObjectSchema ]).optional(), _min: BirthsignMinAggregateInputObjectSchema.optional(), _max: BirthsignMaxAggregateInputObjectSchema.optional() }).strict();