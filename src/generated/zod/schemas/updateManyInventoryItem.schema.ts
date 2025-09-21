import { z } from 'zod';
import { InventoryItemUpdateManyMutationInputObjectSchema } from './objects/InventoryItemUpdateManyMutationInput.schema';
import { InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';

export const InventoryItemUpdateManySchema = z.object({ data: InventoryItemUpdateManyMutationInputObjectSchema, where: InventoryItemWhereInputObjectSchema.optional()  })