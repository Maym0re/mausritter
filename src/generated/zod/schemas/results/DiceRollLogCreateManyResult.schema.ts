import { z } from 'zod';
export const DiceRollLogCreateManyResultSchema = z.object({
  count: z.number()
});