import * as z from 'zod';
export const ConditionUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  clearRequirement: z.string().optional(),
  effects: z.array(z.string()),
  characters: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));