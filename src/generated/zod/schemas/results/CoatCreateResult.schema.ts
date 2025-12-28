import * as z from 'zod';
export const CoatCreateResultSchema = z.object({
  id: z.string(),
  color: z.string(),
  pattern: z.string(),
  characters: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});