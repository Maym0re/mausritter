import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';
import { LandmarkDetailOrderByWithAggregationInputObjectSchema } from './objects/LandmarkDetailOrderByWithAggregationInput.schema';
import { LandmarkDetailScalarWhereWithAggregatesInputObjectSchema } from './objects/LandmarkDetailScalarWhereWithAggregatesInput.schema';
import { LandmarkDetailScalarFieldEnumSchema } from './enums/LandmarkDetailScalarFieldEnum.schema';
import { LandmarkDetailCountAggregateInputObjectSchema } from './objects/LandmarkDetailCountAggregateInput.schema';
import { LandmarkDetailMinAggregateInputObjectSchema } from './objects/LandmarkDetailMinAggregateInput.schema';
import { LandmarkDetailMaxAggregateInputObjectSchema } from './objects/LandmarkDetailMaxAggregateInput.schema';

export const LandmarkDetailGroupBySchema: z.ZodType<Prisma.LandmarkDetailGroupByArgs> = z.object({ where: LandmarkDetailWhereInputObjectSchema.optional(), orderBy: z.union([LandmarkDetailOrderByWithAggregationInputObjectSchema, LandmarkDetailOrderByWithAggregationInputObjectSchema.array()]).optional(), having: LandmarkDetailScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(LandmarkDetailScalarFieldEnumSchema), _count: z.union([ z.literal(true), LandmarkDetailCountAggregateInputObjectSchema ]).optional(), _min: LandmarkDetailMinAggregateInputObjectSchema.optional(), _max: LandmarkDetailMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailGroupByArgs>;

export const LandmarkDetailGroupByZodSchema = z.object({ where: LandmarkDetailWhereInputObjectSchema.optional(), orderBy: z.union([LandmarkDetailOrderByWithAggregationInputObjectSchema, LandmarkDetailOrderByWithAggregationInputObjectSchema.array()]).optional(), having: LandmarkDetailScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(LandmarkDetailScalarFieldEnumSchema), _count: z.union([ z.literal(true), LandmarkDetailCountAggregateInputObjectSchema ]).optional(), _min: LandmarkDetailMinAggregateInputObjectSchema.optional(), _max: LandmarkDetailMaxAggregateInputObjectSchema.optional() }).strict();