import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema';
import { CharacterOrderByWithAggregationInputObjectSchema } from './objects/CharacterOrderByWithAggregationInput.schema';
import { CharacterScalarWhereWithAggregatesInputObjectSchema } from './objects/CharacterScalarWhereWithAggregatesInput.schema';
import { CharacterScalarFieldEnumSchema } from './enums/CharacterScalarFieldEnum.schema';
import { CharacterCountAggregateInputObjectSchema } from './objects/CharacterCountAggregateInput.schema';
import { CharacterMinAggregateInputObjectSchema } from './objects/CharacterMinAggregateInput.schema';
import { CharacterMaxAggregateInputObjectSchema } from './objects/CharacterMaxAggregateInput.schema';
import { CharacterAvgAggregateInputObjectSchema } from './objects/CharacterAvgAggregateInput.schema';
import { CharacterSumAggregateInputObjectSchema } from './objects/CharacterSumAggregateInput.schema';

export const CharacterGroupBySchema: z.ZodType<Prisma.CharacterGroupByArgs> = z.object({ where: CharacterWhereInputObjectSchema.optional(), orderBy: z.union([CharacterOrderByWithAggregationInputObjectSchema, CharacterOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CharacterScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CharacterScalarFieldEnumSchema), _count: z.union([ z.literal(true), CharacterCountAggregateInputObjectSchema ]).optional(), _min: CharacterMinAggregateInputObjectSchema.optional(), _max: CharacterMaxAggregateInputObjectSchema.optional(), _avg: CharacterAvgAggregateInputObjectSchema.optional(), _sum: CharacterSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CharacterGroupByArgs>;

export const CharacterGroupByZodSchema = z.object({ where: CharacterWhereInputObjectSchema.optional(), orderBy: z.union([CharacterOrderByWithAggregationInputObjectSchema, CharacterOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CharacterScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CharacterScalarFieldEnumSchema), _count: z.union([ z.literal(true), CharacterCountAggregateInputObjectSchema ]).optional(), _min: CharacterMinAggregateInputObjectSchema.optional(), _max: CharacterMaxAggregateInputObjectSchema.optional(), _avg: CharacterAvgAggregateInputObjectSchema.optional(), _sum: CharacterSumAggregateInputObjectSchema.optional() }).strict();