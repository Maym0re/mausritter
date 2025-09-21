import { z } from 'zod';
export const ConditionCreateManyResultSchema = z.object({
  count: z.number()
});