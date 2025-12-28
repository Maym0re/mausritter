import * as z from 'zod';
export const DiceRollEntryUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  logId: z.string(),
  log: z.unknown(),
  order: z.number().int(),
  type: z.string(),
  value: z.number().int(),
  sides: z.number().int().optional(),
  createdAt: z.date()
}));