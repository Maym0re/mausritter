import { z } from 'zod';
export const HexCellDeleteManyResultSchema = z.object({
  count: z.number()
});