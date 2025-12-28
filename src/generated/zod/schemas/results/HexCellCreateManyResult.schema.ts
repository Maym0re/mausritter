import * as z from 'zod';
export const HexCellCreateManyResultSchema = z.object({
  count: z.number()
});