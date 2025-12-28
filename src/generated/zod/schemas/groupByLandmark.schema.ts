import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkWhereInputObjectSchema as LandmarkWhereInputObjectSchema } from './objects/LandmarkWhereInput.schema';
import { LandmarkOrderByWithAggregationInputObjectSchema as LandmarkOrderByWithAggregationInputObjectSchema } from './objects/LandmarkOrderByWithAggregationInput.schema';
import { LandmarkScalarWhereWithAggregatesInputObjectSchema as LandmarkScalarWhereWithAggregatesInputObjectSchema } from './objects/LandmarkScalarWhereWithAggregatesInput.schema';
import { LandmarkScalarFieldEnumSchema } from './enums/LandmarkScalarFieldEnum.schema';
import { LandmarkCountAggregateInputObjectSchema as LandmarkCountAggregateInputObjectSchema } from './objects/LandmarkCountAggregateInput.schema';
import { LandmarkMinAggregateInputObjectSchema as LandmarkMinAggregateInputObjectSchema } from './objects/LandmarkMinAggregateInput.schema';
import { LandmarkMaxAggregateInputObjectSchema as LandmarkMaxAggregateInputObjectSchema } from './objects/LandmarkMaxAggregateInput.schema';

export const LandmarkGroupBySchema: z.ZodType<Prisma.LandmarkGroupByArgs> = z.object({ where: LandmarkWhereInputObjectSchema.optional(), orderBy: z.union([LandmarkOrderByWithAggregationInputObjectSchema, LandmarkOrderByWithAggregationInputObjectSchema.array()]).optional(), having: LandmarkScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(LandmarkScalarFieldEnumSchema), _count: z.union([ z.literal(true), LandmarkCountAggregateInputObjectSchema ]).optional(), _min: LandmarkMinAggregateInputObjectSchema.optional(), _max: LandmarkMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkGroupByArgs>;

export const LandmarkGroupByZodSchema = z.object({ where: LandmarkWhereInputObjectSchema.optional(), orderBy: z.union([LandmarkOrderByWithAggregationInputObjectSchema, LandmarkOrderByWithAggregationInputObjectSchema.array()]).optional(), having: LandmarkScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(LandmarkScalarFieldEnumSchema), _count: z.union([ z.literal(true), LandmarkCountAggregateInputObjectSchema ]).optional(), _min: LandmarkMinAggregateInputObjectSchema.optional(), _max: LandmarkMaxAggregateInputObjectSchema.optional() }).strict();