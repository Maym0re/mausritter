import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';
import { InventoryItemOrderByWithAggregationInputObjectSchema } from './objects/InventoryItemOrderByWithAggregationInput.schema';
import { InventoryItemScalarWhereWithAggregatesInputObjectSchema } from './objects/InventoryItemScalarWhereWithAggregatesInput.schema';
import { InventoryItemScalarFieldEnumSchema } from './enums/InventoryItemScalarFieldEnum.schema';
import { InventoryItemCountAggregateInputObjectSchema } from './objects/InventoryItemCountAggregateInput.schema';
import { InventoryItemMinAggregateInputObjectSchema } from './objects/InventoryItemMinAggregateInput.schema';
import { InventoryItemMaxAggregateInputObjectSchema } from './objects/InventoryItemMaxAggregateInput.schema';
import { InventoryItemAvgAggregateInputObjectSchema } from './objects/InventoryItemAvgAggregateInput.schema';
import { InventoryItemSumAggregateInputObjectSchema } from './objects/InventoryItemSumAggregateInput.schema';

export const InventoryItemGroupBySchema: z.ZodType<Prisma.InventoryItemGroupByArgs> = z.object({ where: InventoryItemWhereInputObjectSchema.optional(), orderBy: z.union([InventoryItemOrderByWithAggregationInputObjectSchema, InventoryItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: InventoryItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(InventoryItemScalarFieldEnumSchema), _count: z.union([ z.literal(true), InventoryItemCountAggregateInputObjectSchema ]).optional(), _min: InventoryItemMinAggregateInputObjectSchema.optional(), _max: InventoryItemMaxAggregateInputObjectSchema.optional(), _avg: InventoryItemAvgAggregateInputObjectSchema.optional(), _sum: InventoryItemSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryItemGroupByArgs>;

export const InventoryItemGroupByZodSchema = z.object({ where: InventoryItemWhereInputObjectSchema.optional(), orderBy: z.union([InventoryItemOrderByWithAggregationInputObjectSchema, InventoryItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: InventoryItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(InventoryItemScalarFieldEnumSchema), _count: z.union([ z.literal(true), InventoryItemCountAggregateInputObjectSchema ]).optional(), _min: InventoryItemMinAggregateInputObjectSchema.optional(), _max: InventoryItemMaxAggregateInputObjectSchema.optional(), _avg: InventoryItemAvgAggregateInputObjectSchema.optional(), _sum: InventoryItemSumAggregateInputObjectSchema.optional() }).strict();