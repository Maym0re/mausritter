import { z } from 'zod';
export const HexMapDeleteManyResultSchema = z.object({
  count: z.number()
});