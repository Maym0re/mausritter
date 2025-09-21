import { z } from 'zod';
export const CoatDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  color: z.string(),
  pattern: z.string(),
  characters: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));