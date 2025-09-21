import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LandmarkDetailOrderByWithRelationInputObjectSchema } from './objects/LandmarkDetailOrderByWithRelationInput.schema';
import { LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailCountAggregateInputObjectSchema } from './objects/LandmarkDetailCountAggregateInput.schema';
import { LandmarkDetailMinAggregateInputObjectSchema } from './objects/LandmarkDetailMinAggregateInput.schema';
import { LandmarkDetailMaxAggregateInputObjectSchema } from './objects/LandmarkDetailMaxAggregateInput.schema';

export const LandmarkDetailAggregateSchema: z.ZodType<Prisma.LandmarkDetailAggregateArgs> = z.object({ orderBy: z.union([LandmarkDetailOrderByWithRelationInputObjectSchema, LandmarkDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkDetailWhereInputObjectSchema.optional(), cursor: LandmarkDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), LandmarkDetailCountAggregateInputObjectSchema ]).optional(), _min: LandmarkDetailMinAggregateInputObjectSchema.optional(), _max: LandmarkDetailMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailAggregateArgs>;

export const LandmarkDetailAggregateZodSchema = z.object({ orderBy: z.union([LandmarkDetailOrderByWithRelationInputObjectSchema, LandmarkDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkDetailWhereInputObjectSchema.optional(), cursor: LandmarkDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), LandmarkDetailCountAggregateInputObjectSchema ]).optional(), _min: LandmarkDetailMinAggregateInputObjectSchema.optional(), _max: LandmarkDetailMaxAggregateInputObjectSchema.optional() }).strict();