import { z } from 'zod';
import { InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemUpdateManyMutationInputObjectSchema } from './objects/InventoryItemUpdateManyMutationInput.schema';
import { InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';

export const InventoryItemUpdateManyAndReturnSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), data: InventoryItemUpdateManyMutationInputObjectSchema, where: InventoryItemWhereInputObjectSchema.optional()  }).strict()