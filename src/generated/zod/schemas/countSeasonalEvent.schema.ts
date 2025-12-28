import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventOrderByWithRelationInputObjectSchema as SeasonalEventOrderByWithRelationInputObjectSchema } from './objects/SeasonalEventOrderByWithRelationInput.schema';
import { SeasonalEventWhereInputObjectSchema as SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';
import { SeasonalEventWhereUniqueInputObjectSchema as SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';
import { SeasonalEventCountAggregateInputObjectSchema as SeasonalEventCountAggregateInputObjectSchema } from './objects/SeasonalEventCountAggregateInput.schema';

export const SeasonalEventCountSchema: z.ZodType<Prisma.SeasonalEventCountArgs> = z.object({ orderBy: z.union([SeasonalEventOrderByWithRelationInputObjectSchema, SeasonalEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeasonalEventWhereInputObjectSchema.optional(), cursor: SeasonalEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SeasonalEventCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventCountArgs>;

export const SeasonalEventCountZodSchema = z.object({ orderBy: z.union([SeasonalEventOrderByWithRelationInputObjectSchema, SeasonalEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeasonalEventWhereInputObjectSchema.optional(), cursor: SeasonalEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SeasonalEventCountAggregateInputObjectSchema ]).optional() }).strict();