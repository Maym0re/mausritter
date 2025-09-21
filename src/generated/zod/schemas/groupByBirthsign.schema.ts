import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';
import { BirthsignOrderByWithAggregationInputObjectSchema } from './objects/BirthsignOrderByWithAggregationInput.schema';
import { BirthsignScalarWhereWithAggregatesInputObjectSchema } from './objects/BirthsignScalarWhereWithAggregatesInput.schema';
import { BirthsignScalarFieldEnumSchema } from './enums/BirthsignScalarFieldEnum.schema';
import { BirthsignCountAggregateInputObjectSchema } from './objects/BirthsignCountAggregateInput.schema';
import { BirthsignMinAggregateInputObjectSchema } from './objects/BirthsignMinAggregateInput.schema';
import { BirthsignMaxAggregateInputObjectSchema } from './objects/BirthsignMaxAggregateInput.schema';

export const BirthsignGroupBySchema: z.ZodType<Prisma.BirthsignGroupByArgs> = z.object({ where: BirthsignWhereInputObjectSchema.optional(), orderBy: z.union([BirthsignOrderByWithAggregationInputObjectSchema, BirthsignOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BirthsignScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BirthsignScalarFieldEnumSchema), _count: z.union([ z.literal(true), BirthsignCountAggregateInputObjectSchema ]).optional(), _min: BirthsignMinAggregateInputObjectSchema.optional(), _max: BirthsignMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignGroupByArgs>;

export const BirthsignGroupByZodSchema = z.object({ where: BirthsignWhereInputObjectSchema.optional(), orderBy: z.union([BirthsignOrderByWithAggregationInputObjectSchema, BirthsignOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BirthsignScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BirthsignScalarFieldEnumSchema), _count: z.union([ z.literal(true), BirthsignCountAggregateInputObjectSchema ]).optional(), _min: BirthsignMinAggregateInputObjectSchema.optional(), _max: BirthsignMaxAggregateInputObjectSchema.optional() }).strict();