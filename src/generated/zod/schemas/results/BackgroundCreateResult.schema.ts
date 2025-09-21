import { z } from 'zod';
export const BackgroundCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  itemA: z.string(),
  itemB: z.string(),
  characters: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});