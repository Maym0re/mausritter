import { z } from 'zod';
import { InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemUpdateInputObjectSchema } from './objects/InventoryItemUpdateInput.schema';
import { InventoryItemUncheckedUpdateInputObjectSchema } from './objects/InventoryItemUncheckedUpdateInput.schema';
import { InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';

export const InventoryItemUpdateOneSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), data: z.union([InventoryItemUpdateInputObjectSchema, InventoryItemUncheckedUpdateInputObjectSchema]), where: InventoryItemWhereUniqueInputObjectSchema  })