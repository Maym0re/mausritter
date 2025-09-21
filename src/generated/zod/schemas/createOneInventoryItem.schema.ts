import { z } from 'zod';
import { InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemCreateInputObjectSchema } from './objects/InventoryItemCreateInput.schema';
import { InventoryItemUncheckedCreateInputObjectSchema } from './objects/InventoryItemUncheckedCreateInput.schema';

export const InventoryItemCreateOneSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), data: z.union([InventoryItemCreateInputObjectSchema, InventoryItemUncheckedCreateInputObjectSchema])  })