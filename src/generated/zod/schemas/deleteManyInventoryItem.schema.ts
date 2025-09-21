import { z } from 'zod';
import { InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';

export const InventoryItemDeleteManySchema = z.object({ where: InventoryItemWhereInputObjectSchema.optional()  })