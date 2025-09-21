import { z } from 'zod';
export const CampaignCreateResultSchema = z.object({
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
});