import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatOrderByWithRelationInputObjectSchema as CoatOrderByWithRelationInputObjectSchema } from './objects/CoatOrderByWithRelationInput.schema';
import { CoatWhereInputObjectSchema as CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';
import { CoatWhereUniqueInputObjectSchema as CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';
import { CoatCountAggregateInputObjectSchema as CoatCountAggregateInputObjectSchema } from './objects/CoatCountAggregateInput.schema';

export const CoatCountSchema: z.ZodType<Prisma.CoatCountArgs> = z.object({ orderBy: z.union([CoatOrderByWithRelationInputObjectSchema, CoatOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoatWhereInputObjectSchema.optional(), cursor: CoatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CoatCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CoatCountArgs>;

export const CoatCountZodSchema = z.object({ orderBy: z.union([CoatOrderByWithRelationInputObjectSchema, CoatOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoatWhereInputObjectSchema.optional(), cursor: CoatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CoatCountAggregateInputObjectSchema ]).optional() }).strict();