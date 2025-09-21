import { z } from 'zod';
import { InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemCreateManyInputObjectSchema } from './objects/InventoryItemCreateManyInput.schema';

export const InventoryItemCreateManyAndReturnSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), data: z.union([ InventoryItemCreateManyInputObjectSchema, z.array(InventoryItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()