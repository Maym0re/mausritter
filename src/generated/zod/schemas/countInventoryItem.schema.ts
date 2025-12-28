import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemOrderByWithRelationInputObjectSchema as InventoryItemOrderByWithRelationInputObjectSchema } from './objects/InventoryItemOrderByWithRelationInput.schema';
import { InventoryItemWhereInputObjectSchema as InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';
import { InventoryItemWhereUniqueInputObjectSchema as InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';
import { InventoryItemCountAggregateInputObjectSchema as InventoryItemCountAggregateInputObjectSchema } from './objects/InventoryItemCountAggregateInput.schema';

export const InventoryItemCountSchema: z.ZodType<Prisma.InventoryItemCountArgs> = z.object({ orderBy: z.union([InventoryItemOrderByWithRelationInputObjectSchema, InventoryItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryItemWhereInputObjectSchema.optional(), cursor: InventoryItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), InventoryItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.InventoryItemCountArgs>;

export const InventoryItemCountZodSchema = z.object({ orderBy: z.union([InventoryItemOrderByWithRelationInputObjectSchema, InventoryItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryItemWhereInputObjectSchema.optional(), cursor: InventoryItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), InventoryItemCountAggregateInputObjectSchema ]).optional() }).strict();