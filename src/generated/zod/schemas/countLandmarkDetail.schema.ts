import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailOrderByWithRelationInputObjectSchema as LandmarkDetailOrderByWithRelationInputObjectSchema } from './objects/LandmarkDetailOrderByWithRelationInput.schema';
import { LandmarkDetailWhereInputObjectSchema as LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema as LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailCountAggregateInputObjectSchema as LandmarkDetailCountAggregateInputObjectSchema } from './objects/LandmarkDetailCountAggregateInput.schema';

export const LandmarkDetailCountSchema: z.ZodType<Prisma.LandmarkDetailCountArgs> = z.object({ orderBy: z.union([LandmarkDetailOrderByWithRelationInputObjectSchema, LandmarkDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkDetailWhereInputObjectSchema.optional(), cursor: LandmarkDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LandmarkDetailCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailCountArgs>;

export const LandmarkDetailCountZodSchema = z.object({ orderBy: z.union([LandmarkDetailOrderByWithRelationInputObjectSchema, LandmarkDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkDetailWhereInputObjectSchema.optional(), cursor: LandmarkDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LandmarkDetailCountAggregateInputObjectSchema ]).optional() }).strict();