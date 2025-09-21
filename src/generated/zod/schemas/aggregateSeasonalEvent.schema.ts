import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SeasonalEventOrderByWithRelationInputObjectSchema } from './objects/SeasonalEventOrderByWithRelationInput.schema';
import { SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';
import { SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';
import { SeasonalEventCountAggregateInputObjectSchema } from './objects/SeasonalEventCountAggregateInput.schema';
import { SeasonalEventMinAggregateInputObjectSchema } from './objects/SeasonalEventMinAggregateInput.schema';
import { SeasonalEventMaxAggregateInputObjectSchema } from './objects/SeasonalEventMaxAggregateInput.schema';

export const SeasonalEventAggregateSchema: z.ZodType<Prisma.SeasonalEventAggregateArgs> = z.object({ orderBy: z.union([SeasonalEventOrderByWithRelationInputObjectSchema, SeasonalEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeasonalEventWhereInputObjectSchema.optional(), cursor: SeasonalEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SeasonalEventCountAggregateInputObjectSchema ]).optional(), _min: SeasonalEventMinAggregateInputObjectSchema.optional(), _max: SeasonalEventMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventAggregateArgs>;

export const SeasonalEventAggregateZodSchema = z.object({ orderBy: z.union([SeasonalEventOrderByWithRelationInputObjectSchema, SeasonalEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeasonalEventWhereInputObjectSchema.optional(), cursor: SeasonalEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SeasonalEventCountAggregateInputObjectSchema ]).optional(), _min: SeasonalEventMinAggregateInputObjectSchema.optional(), _max: SeasonalEventMaxAggregateInputObjectSchema.optional() }).strict();