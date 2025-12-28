import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignOrderByWithRelationInputObjectSchema as BirthsignOrderByWithRelationInputObjectSchema } from './objects/BirthsignOrderByWithRelationInput.schema';
import { BirthsignWhereInputObjectSchema as BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';
import { BirthsignWhereUniqueInputObjectSchema as BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';
import { BirthsignCountAggregateInputObjectSchema as BirthsignCountAggregateInputObjectSchema } from './objects/BirthsignCountAggregateInput.schema';

export const BirthsignCountSchema: z.ZodType<Prisma.BirthsignCountArgs> = z.object({ orderBy: z.union([BirthsignOrderByWithRelationInputObjectSchema, BirthsignOrderByWithRelationInputObjectSchema.array()]).optional(), where: BirthsignWhereInputObjectSchema.optional(), cursor: BirthsignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BirthsignCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignCountArgs>;

export const BirthsignCountZodSchema = z.object({ orderBy: z.union([BirthsignOrderByWithRelationInputObjectSchema, BirthsignOrderByWithRelationInputObjectSchema.array()]).optional(), where: BirthsignWhereInputObjectSchema.optional(), cursor: BirthsignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BirthsignCountAggregateInputObjectSchema ]).optional() }).strict();