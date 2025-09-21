import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';
import { CoatOrderByWithAggregationInputObjectSchema } from './objects/CoatOrderByWithAggregationInput.schema';
import { CoatScalarWhereWithAggregatesInputObjectSchema } from './objects/CoatScalarWhereWithAggregatesInput.schema';
import { CoatScalarFieldEnumSchema } from './enums/CoatScalarFieldEnum.schema';
import { CoatCountAggregateInputObjectSchema } from './objects/CoatCountAggregateInput.schema';
import { CoatMinAggregateInputObjectSchema } from './objects/CoatMinAggregateInput.schema';
import { CoatMaxAggregateInputObjectSchema } from './objects/CoatMaxAggregateInput.schema';

export const CoatGroupBySchema: z.ZodType<Prisma.CoatGroupByArgs> = z.object({ where: CoatWhereInputObjectSchema.optional(), orderBy: z.union([CoatOrderByWithAggregationInputObjectSchema, CoatOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CoatScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CoatScalarFieldEnumSchema), _count: z.union([ z.literal(true), CoatCountAggregateInputObjectSchema ]).optional(), _min: CoatMinAggregateInputObjectSchema.optional(), _max: CoatMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CoatGroupByArgs>;

export const CoatGroupByZodSchema = z.object({ where: CoatWhereInputObjectSchema.optional(), orderBy: z.union([CoatOrderByWithAggregationInputObjectSchema, CoatOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CoatScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CoatScalarFieldEnumSchema), _count: z.union([ z.literal(true), CoatCountAggregateInputObjectSchema ]).optional(), _min: CoatMinAggregateInputObjectSchema.optional(), _max: CoatMaxAggregateInputObjectSchema.optional() }).strict();