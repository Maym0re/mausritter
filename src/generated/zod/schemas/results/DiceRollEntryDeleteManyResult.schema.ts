import { z } from 'zod';
export const DiceRollEntryDeleteManyResultSchema = z.object({
  count: z.number()
});