import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BackgroundOrderByWithRelationInputObjectSchema } from './objects/BackgroundOrderByWithRelationInput.schema';
import { BackgroundWhereInputObjectSchema } from './objects/BackgroundWhereInput.schema';
import { BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';
import { BackgroundCountAggregateInputObjectSchema } from './objects/BackgroundCountAggregateInput.schema';

export const BackgroundCountSchema: z.ZodType<Prisma.BackgroundCountArgs> = z.object({ orderBy: z.union([BackgroundOrderByWithRelationInputObjectSchema, BackgroundOrderByWithRelationInputObjectSchema.array()]).optional(), where: BackgroundWhereInputObjectSchema.optional(), cursor: BackgroundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BackgroundCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BackgroundCountArgs>;

export const BackgroundCountZodSchema = z.object({ orderBy: z.union([BackgroundOrderByWithRelationInputObjectSchema, BackgroundOrderByWithRelationInputObjectSchema.array()]).optional(), where: BackgroundWhereInputObjectSchema.optional(), cursor: BackgroundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BackgroundCountAggregateInputObjectSchema ]).optional() }).strict();