import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BackgroundOrderByWithRelationInputObjectSchema } from './objects/BackgroundOrderByWithRelationInput.schema';
import { BackgroundWhereInputObjectSchema } from './objects/BackgroundWhereInput.schema';
import { BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';
import { BackgroundCountAggregateInputObjectSchema } from './objects/BackgroundCountAggregateInput.schema';
import { BackgroundMinAggregateInputObjectSchema } from './objects/BackgroundMinAggregateInput.schema';
import { BackgroundMaxAggregateInputObjectSchema } from './objects/BackgroundMaxAggregateInput.schema';

export const BackgroundAggregateSchema: z.ZodType<Prisma.BackgroundAggregateArgs> = z.object({ orderBy: z.union([BackgroundOrderByWithRelationInputObjectSchema, BackgroundOrderByWithRelationInputObjectSchema.array()]).optional(), where: BackgroundWhereInputObjectSchema.optional(), cursor: BackgroundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BackgroundCountAggregateInputObjectSchema ]).optional(), _min: BackgroundMinAggregateInputObjectSchema.optional(), _max: BackgroundMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BackgroundAggregateArgs>;

export const BackgroundAggregateZodSchema = z.object({ orderBy: z.union([BackgroundOrderByWithRelationInputObjectSchema, BackgroundOrderByWithRelationInputObjectSchema.array()]).optional(), where: BackgroundWhereInputObjectSchema.optional(), cursor: BackgroundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BackgroundCountAggregateInputObjectSchema ]).optional(), _min: BackgroundMinAggregateInputObjectSchema.optional(), _max: BackgroundMaxAggregateInputObjectSchema.optional() }).strict();