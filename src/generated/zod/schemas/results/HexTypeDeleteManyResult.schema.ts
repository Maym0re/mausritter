import { z } from 'zod';
export const HexTypeDeleteManyResultSchema = z.object({
  count: z.number()
});