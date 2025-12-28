import * as z from 'zod';
export const BackgroundDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  itemA: z.string(),
  itemB: z.string(),
  characters: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));