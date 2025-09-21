import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { InventoryItemOrderByWithRelationInputObjectSchema } from './objects/InventoryItemOrderByWithRelationInput.schema';
import { InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';
import { InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';
import { InventoryItemCountAggregateInputObjectSchema } from './objects/InventoryItemCountAggregateInput.schema';
import { InventoryItemMinAggregateInputObjectSchema } from './objects/InventoryItemMinAggregateInput.schema';
import { InventoryItemMaxAggregateInputObjectSchema } from './objects/InventoryItemMaxAggregateInput.schema';
import { InventoryItemAvgAggregateInputObjectSchema } from './objects/InventoryItemAvgAggregateInput.schema';
import { InventoryItemSumAggregateInputObjectSchema } from './objects/InventoryItemSumAggregateInput.schema';

export const InventoryItemAggregateSchema: z.ZodType<Prisma.InventoryItemAggregateArgs> = z.object({ orderBy: z.union([InventoryItemOrderByWithRelationInputObjectSchema, InventoryItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryItemWhereInputObjectSchema.optional(), cursor: InventoryItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), InventoryItemCountAggregateInputObjectSchema ]).optional(), _min: InventoryItemMinAggregateInputObjectSchema.optional(), _max: InventoryItemMaxAggregateInputObjectSchema.optional(), _avg: InventoryItemAvgAggregateInputObjectSchema.optional(), _sum: InventoryItemSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryItemAggregateArgs>;

export const InventoryItemAggregateZodSchema = z.object({ orderBy: z.union([InventoryItemOrderByWithRelationInputObjectSchema, InventoryItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryItemWhereInputObjectSchema.optional(), cursor: InventoryItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), InventoryItemCountAggregateInputObjectSchema ]).optional(), _min: InventoryItemMinAggregateInputObjectSchema.optional(), _max: InventoryItemMaxAggregateInputObjectSchema.optional(), _avg: InventoryItemAvgAggregateInputObjectSchema.optional(), _sum: InventoryItemSumAggregateInputObjectSchema.optional() }).strict();