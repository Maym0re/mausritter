import { z } from 'zod';
import { InventoryItemCreateManyInputObjectSchema } from './objects/InventoryItemCreateManyInput.schema';

export const InventoryItemCreateManySchema = z.object({ data: z.union([ InventoryItemCreateManyInputObjectSchema, z.array(InventoryItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })