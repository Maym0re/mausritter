import { z } from 'zod';
export const BirthsignCreateResultSchema = z.object({
  id: z.string(),
  sign: z.string(),
  disposition: z.string(),
  characters: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});