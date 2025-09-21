import { z } from 'zod';
import { InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';

export const InventoryItemDeleteOneSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), where: InventoryItemWhereUniqueInputObjectSchema  })