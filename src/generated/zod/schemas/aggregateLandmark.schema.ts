import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LandmarkOrderByWithRelationInputObjectSchema } from './objects/LandmarkOrderByWithRelationInput.schema';
import { LandmarkWhereInputObjectSchema } from './objects/LandmarkWhereInput.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';
import { LandmarkCountAggregateInputObjectSchema } from './objects/LandmarkCountAggregateInput.schema';
import { LandmarkMinAggregateInputObjectSchema } from './objects/LandmarkMinAggregateInput.schema';
import { LandmarkMaxAggregateInputObjectSchema } from './objects/LandmarkMaxAggregateInput.schema';

export const LandmarkAggregateSchema: z.ZodType<Prisma.LandmarkAggregateArgs> = z.object({ orderBy: z.union([LandmarkOrderByWithRelationInputObjectSchema, LandmarkOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkWhereInputObjectSchema.optional(), cursor: LandmarkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), LandmarkCountAggregateInputObjectSchema ]).optional(), _min: LandmarkMinAggregateInputObjectSchema.optional(), _max: LandmarkMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkAggregateArgs>;

export const LandmarkAggregateZodSchema = z.object({ orderBy: z.union([LandmarkOrderByWithRelationInputObjectSchema, LandmarkOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkWhereInputObjectSchema.optional(), cursor: LandmarkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), LandmarkCountAggregateInputObjectSchema ]).optional(), _min: LandmarkMinAggregateInputObjectSchema.optional(), _max: LandmarkMaxAggregateInputObjectSchema.optional() }).strict();