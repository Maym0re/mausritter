import { z } from 'zod';
export const BackgroundDeleteManyResultSchema = z.object({
  count: z.number()
});