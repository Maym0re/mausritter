import { z } from 'zod';
export const InventoryItemCreateManyResultSchema = z.object({
  count: z.number()
});