import { z } from 'zod';
export const HexTypeCreateManyResultSchema = z.object({
  count: z.number()
});