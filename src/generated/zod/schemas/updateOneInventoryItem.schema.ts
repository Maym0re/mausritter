import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemSelectObjectSchema as InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema as InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemUpdateInputObjectSchema as InventoryItemUpdateInputObjectSchema } from './objects/InventoryItemUpdateInput.schema';
import { InventoryItemUncheckedUpdateInputObjectSchema as InventoryItemUncheckedUpdateInputObjectSchema } from './objects/InventoryItemUncheckedUpdateInput.schema';
import { InventoryItemWhereUniqueInputObjectSchema as InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';

export const InventoryItemUpdateOneSchema: z.ZodType<Prisma.InventoryItemUpdateArgs> = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), data: z.union([InventoryItemUpdateInputObjectSchema, InventoryItemUncheckedUpdateInputObjectSchema]), where: InventoryItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryItemUpdateArgs>;

export const InventoryItemUpdateOneZodSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), data: z.union([InventoryItemUpdateInputObjectSchema, InventoryItemUncheckedUpdateInputObjectSchema]), where: InventoryItemWhereUniqueInputObjectSchema }).strict();