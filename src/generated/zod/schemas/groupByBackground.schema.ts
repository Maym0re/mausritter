import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BackgroundWhereInputObjectSchema } from './objects/BackgroundWhereInput.schema';
import { BackgroundOrderByWithAggregationInputObjectSchema } from './objects/BackgroundOrderByWithAggregationInput.schema';
import { BackgroundScalarWhereWithAggregatesInputObjectSchema } from './objects/BackgroundScalarWhereWithAggregatesInput.schema';
import { BackgroundScalarFieldEnumSchema } from './enums/BackgroundScalarFieldEnum.schema';
import { BackgroundCountAggregateInputObjectSchema } from './objects/BackgroundCountAggregateInput.schema';
import { BackgroundMinAggregateInputObjectSchema } from './objects/BackgroundMinAggregateInput.schema';
import { BackgroundMaxAggregateInputObjectSchema } from './objects/BackgroundMaxAggregateInput.schema';

export const BackgroundGroupBySchema: z.ZodType<Prisma.BackgroundGroupByArgs> = z.object({ where: BackgroundWhereInputObjectSchema.optional(), orderBy: z.union([BackgroundOrderByWithAggregationInputObjectSchema, BackgroundOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BackgroundScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BackgroundScalarFieldEnumSchema), _count: z.union([ z.literal(true), BackgroundCountAggregateInputObjectSchema ]).optional(), _min: BackgroundMinAggregateInputObjectSchema.optional(), _max: BackgroundMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BackgroundGroupByArgs>;

export const BackgroundGroupByZodSchema = z.object({ where: BackgroundWhereInputObjectSchema.optional(), orderBy: z.union([BackgroundOrderByWithAggregationInputObjectSchema, BackgroundOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BackgroundScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BackgroundScalarFieldEnumSchema), _count: z.union([ z.literal(true), BackgroundCountAggregateInputObjectSchema ]).optional(), _min: BackgroundMinAggregateInputObjectSchema.optional(), _max: BackgroundMaxAggregateInputObjectSchema.optional() }).strict();