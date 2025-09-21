import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemOrderByWithRelationInputObjectSchema } from './objects/InventoryItemOrderByWithRelationInput.schema';
import { InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';
import { InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';
import { InventoryItemScalarFieldEnumSchema } from './enums/InventoryItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InventoryItemFindManySelectSchema: z.ZodType<Prisma.InventoryItemSelect> = z.object({
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

export const InventoryItemFindManySelectZodSchema = z.object({
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

export const InventoryItemFindManySchema: z.ZodType<Prisma.InventoryItemFindManyArgs> = z.object({ select: InventoryItemFindManySelectSchema.optional(), include: z.lazy(() => InventoryItemIncludeObjectSchema.optional()), orderBy: z.union([InventoryItemOrderByWithRelationInputObjectSchema, InventoryItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryItemWhereInputObjectSchema.optional(), cursor: InventoryItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InventoryItemScalarFieldEnumSchema, InventoryItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.InventoryItemFindManyArgs>;

export const InventoryItemFindManyZodSchema = z.object({ select: InventoryItemFindManySelectSchema.optional(), include: z.lazy(() => InventoryItemIncludeObjectSchema.optional()), orderBy: z.union([InventoryItemOrderByWithRelationInputObjectSchema, InventoryItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryItemWhereInputObjectSchema.optional(), cursor: InventoryItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InventoryItemScalarFieldEnumSchema, InventoryItemScalarFieldEnumSchema.array()]).optional() }).strict();