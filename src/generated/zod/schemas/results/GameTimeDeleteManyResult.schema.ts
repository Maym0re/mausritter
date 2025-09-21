import { z } from 'zod';
export const GameTimeDeleteManyResultSchema = z.object({
  count: z.number()
});