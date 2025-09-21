import { z } from 'zod';
export const CampaignFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  isActive: z.boolean(),
  gmId: z.string(),
  gm: z.unknown(),
  players: z.array(z.unknown()),
  characters: z.array(z.unknown()),
  gameTime: z.unknown().optional(),
  season: z.unknown(),
  weatherEntryId: z.string().optional(),
  weatherEntry: z.unknown().optional(),
  hexMap: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  todaysEvent: z.string().optional(),
  diceRolls: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});