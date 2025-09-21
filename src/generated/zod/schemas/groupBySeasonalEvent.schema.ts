import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';
import { SeasonalEventOrderByWithAggregationInputObjectSchema } from './objects/SeasonalEventOrderByWithAggregationInput.schema';
import { SeasonalEventScalarWhereWithAggregatesInputObjectSchema } from './objects/SeasonalEventScalarWhereWithAggregatesInput.schema';
import { SeasonalEventScalarFieldEnumSchema } from './enums/SeasonalEventScalarFieldEnum.schema';
import { SeasonalEventCountAggregateInputObjectSchema } from './objects/SeasonalEventCountAggregateInput.schema';
import { SeasonalEventMinAggregateInputObjectSchema } from './objects/SeasonalEventMinAggregateInput.schema';
import { SeasonalEventMaxAggregateInputObjectSchema } from './objects/SeasonalEventMaxAggregateInput.schema';

export const SeasonalEventGroupBySchema: z.ZodType<Prisma.SeasonalEventGroupByArgs> = z.object({ where: SeasonalEventWhereInputObjectSchema.optional(), orderBy: z.union([SeasonalEventOrderByWithAggregationInputObjectSchema, SeasonalEventOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SeasonalEventScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SeasonalEventScalarFieldEnumSchema), _count: z.union([ z.literal(true), SeasonalEventCountAggregateInputObjectSchema ]).optional(), _min: SeasonalEventMinAggregateInputObjectSchema.optional(), _max: SeasonalEventMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventGroupByArgs>;

export const SeasonalEventGroupByZodSchema = z.object({ where: SeasonalEventWhereInputObjectSchema.optional(), orderBy: z.union([SeasonalEventOrderByWithAggregationInputObjectSchema, SeasonalEventOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SeasonalEventScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SeasonalEventScalarFieldEnumSchema), _count: z.union([ z.literal(true), SeasonalEventCountAggregateInputObjectSchema ]).optional(), _min: SeasonalEventMinAggregateInputObjectSchema.optional(), _max: SeasonalEventMaxAggregateInputObjectSchema.optional() }).strict();