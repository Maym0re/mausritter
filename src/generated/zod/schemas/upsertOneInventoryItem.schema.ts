import { z } from 'zod';
import { InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';
import { InventoryItemCreateInputObjectSchema } from './objects/InventoryItemCreateInput.schema';
import { InventoryItemUncheckedCreateInputObjectSchema } from './objects/InventoryItemUncheckedCreateInput.schema';
import { InventoryItemUpdateInputObjectSchema } from './objects/InventoryItemUpdateInput.schema';
import { InventoryItemUncheckedUpdateInputObjectSchema } from './objects/InventoryItemUncheckedUpdateInput.schema';

export const InventoryItemUpsertSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), where: InventoryItemWhereUniqueInputObjectSchema, create: z.union([ InventoryItemCreateInputObjectSchema, InventoryItemUncheckedCreateInputObjectSchema ]), update: z.union([ InventoryItemUpdateInputObjectSchema, InventoryItemUncheckedUpdateInputObjectSchema ])  })