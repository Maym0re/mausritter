import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkOrderByWithRelationInputObjectSchema as LandmarkOrderByWithRelationInputObjectSchema } from './objects/LandmarkOrderByWithRelationInput.schema';
import { LandmarkWhereInputObjectSchema as LandmarkWhereInputObjectSchema } from './objects/LandmarkWhereInput.schema';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';
import { LandmarkCountAggregateInputObjectSchema as LandmarkCountAggregateInputObjectSchema } from './objects/LandmarkCountAggregateInput.schema';

export const LandmarkCountSchema: z.ZodType<Prisma.LandmarkCountArgs> = z.object({ orderBy: z.union([LandmarkOrderByWithRelationInputObjectSchema, LandmarkOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkWhereInputObjectSchema.optional(), cursor: LandmarkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LandmarkCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkCountArgs>;

export const LandmarkCountZodSchema = z.object({ orderBy: z.union([LandmarkOrderByWithRelationInputObjectSchema, LandmarkOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkWhereInputObjectSchema.optional(), cursor: LandmarkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LandmarkCountAggregateInputObjectSchema ]).optional() }).strict();