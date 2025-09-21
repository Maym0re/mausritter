import { z } from 'zod';
export const DiceRollEntryCreateManyResultSchema = z.object({
  count: z.number()
});