import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BirthsignOrderByWithRelationInputObjectSchema } from './objects/BirthsignOrderByWithRelationInput.schema';
import { BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';
import { BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';
import { BirthsignCountAggregateInputObjectSchema } from './objects/BirthsignCountAggregateInput.schema';

export const BirthsignCountSchema: z.ZodType<Prisma.BirthsignCountArgs> = z.object({ orderBy: z.union([BirthsignOrderByWithRelationInputObjectSchema, BirthsignOrderByWithRelationInputObjectSchema.array()]).optional(), where: BirthsignWhereInputObjectSchema.optional(), cursor: BirthsignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BirthsignCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignCountArgs>;

export const BirthsignCountZodSchema = z.object({ orderBy: z.union([BirthsignOrderByWithRelationInputObjectSchema, BirthsignOrderByWithRelationInputObjectSchema.array()]).optional(), where: BirthsignWhereInputObjectSchema.optional(), cursor: BirthsignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BirthsignCountAggregateInputObjectSchema ]).optional() }).strict();