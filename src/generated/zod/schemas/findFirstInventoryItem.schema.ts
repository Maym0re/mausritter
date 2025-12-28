import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemIncludeObjectSchema as InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemOrderByWithRelationInputObjectSchema as InventoryItemOrderByWithRelationInputObjectSchema } from './objects/InventoryItemOrderByWithRelationInput.schema';
import { InventoryItemWhereInputObjectSchema as InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';
import { InventoryItemWhereUniqueInputObjectSchema as InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';
import { InventoryItemScalarFieldEnumSchema } from './enums/InventoryItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InventoryItemFindFirstSelectSchema: z.ZodType<Prisma.InventoryItemSelect> = z.object({
    id: z.boolean().optional(),
    characterId: z.boolean().optional(),
    character: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    size: z.boolean().optional(),
    usage: z.boolean().optional(),
    maxUsage: z.boolean().optional(),
    description: z.boolean().optional(),
    value: z.boolean().optional(),
    slotType: z.boolean().optional(),
    slotIndex: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.InventoryItemSelect>;

export const InventoryItemFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    characterId: z.boolean().optional(),
    character: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    size: z.boolean().optional(),
    usage: z.boolean().optional(),
    maxUsage: z.boolean().optional(),
    description: z.boolean().optional(),
    value: z.boolean().optional(),
    slotType: z.boolean().optional(),
    slotIndex: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const InventoryItemFindFirstSchema: z.ZodType<Prisma.InventoryItemFindFirstArgs> = z.object({ select: InventoryItemFindFirstSelectSchema.optional(), include: z.lazy(() => InventoryItemIncludeObjectSchema.optional()), orderBy: z.union([InventoryItemOrderByWithRelationInputObjectSchema, InventoryItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryItemWhereInputObjectSchema.optional(), cursor: InventoryItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InventoryItemScalarFieldEnumSchema, InventoryItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.InventoryItemFindFirstArgs>;

export const InventoryItemFindFirstZodSchema = z.object({ select: InventoryItemFindFirstSelectSchema.optional(), include: z.lazy(() => InventoryItemIncludeObjectSchema.optional()), orderBy: z.union([InventoryItemOrderByWithRelationInputObjectSchema, InventoryItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryItemWhereInputObjectSchema.optional(), cursor: InventoryItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InventoryItemScalarFieldEnumSchema, InventoryItemScalarFieldEnumSchema.array()]).optional() }).strict();