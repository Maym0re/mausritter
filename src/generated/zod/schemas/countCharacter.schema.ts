import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterOrderByWithRelationInputObjectSchema as CharacterOrderByWithRelationInputObjectSchema } from './objects/CharacterOrderByWithRelationInput.schema';
import { CharacterWhereInputObjectSchema as CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';
import { CharacterCountAggregateInputObjectSchema as CharacterCountAggregateInputObjectSchema } from './objects/CharacterCountAggregateInput.schema';

export const CharacterCountSchema: z.ZodType<Prisma.CharacterCountArgs> = z.object({ orderBy: z.union([CharacterOrderByWithRelationInputObjectSchema, CharacterOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterWhereInputObjectSchema.optional(), cursor: CharacterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CharacterCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CharacterCountArgs>;

export const CharacterCountZodSchema = z.object({ orderBy: z.union([CharacterOrderByWithRelationInputObjectSchema, CharacterOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterWhereInputObjectSchema.optional(), cursor: CharacterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CharacterCountAggregateInputObjectSchema ]).optional() }).strict();