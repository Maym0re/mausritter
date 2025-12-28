import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeWhereInputObjectSchema as HexTypeWhereInputObjectSchema } from './objects/HexTypeWhereInput.schema';
import { HexTypeOrderByWithAggregationInputObjectSchema as HexTypeOrderByWithAggregationInputObjectSchema } from './objects/HexTypeOrderByWithAggregationInput.schema';
import { HexTypeScalarWhereWithAggregatesInputObjectSchema as HexTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/HexTypeScalarWhereWithAggregatesInput.schema';
import { HexTypeScalarFieldEnumSchema } from './enums/HexTypeScalarFieldEnum.schema';
import { HexTypeCountAggregateInputObjectSchema as HexTypeCountAggregateInputObjectSchema } from './objects/HexTypeCountAggregateInput.schema';
import { HexTypeMinAggregateInputObjectSchema as HexTypeMinAggregateInputObjectSchema } from './objects/HexTypeMinAggregateInput.schema';
import { HexTypeMaxAggregateInputObjectSchema as HexTypeMaxAggregateInputObjectSchema } from './objects/HexTypeMaxAggregateInput.schema';

export const HexTypeGroupBySchema: z.ZodType<Prisma.HexTypeGroupByArgs> = z.object({ where: HexTypeWhereInputObjectSchema.optional(), orderBy: z.union([HexTypeOrderByWithAggregationInputObjectSchema, HexTypeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: HexTypeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(HexTypeScalarFieldEnumSchema), _count: z.union([ z.literal(true), HexTypeCountAggregateInputObjectSchema ]).optional(), _min: HexTypeMinAggregateInputObjectSchema.optional(), _max: HexTypeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexTypeGroupByArgs>;

export const HexTypeGroupByZodSchema = z.object({ where: HexTypeWhereInputObjectSchema.optional(), orderBy: z.union([HexTypeOrderByWithAggregationInputObjectSchema, HexTypeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: HexTypeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(HexTypeScalarFieldEnumSchema), _count: z.union([ z.literal(true), HexTypeCountAggregateInputObjectSchema ]).optional(), _min: HexTypeMinAggregateInputObjectSchema.optional(), _max: HexTypeMaxAggregateInputObjectSchema.optional() }).strict();