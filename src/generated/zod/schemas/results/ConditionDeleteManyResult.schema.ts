import { z } from 'zod';
export const ConditionDeleteManyResultSchema = z.object({
  count: z.number()
});