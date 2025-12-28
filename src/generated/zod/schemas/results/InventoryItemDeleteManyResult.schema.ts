import * as z from 'zod';
export const InventoryItemDeleteManyResultSchema = z.object({
  count: z.number()
});