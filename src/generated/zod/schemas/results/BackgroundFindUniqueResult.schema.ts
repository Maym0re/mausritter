import { z } from 'zod';
export const BackgroundFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  itemA: z.string(),
  itemB: z.string(),
  characters: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));