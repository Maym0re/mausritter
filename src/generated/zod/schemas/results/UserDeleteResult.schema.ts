import { z } from 'zod';
export const UserDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
  password: z.string().optional(),
  accounts: z.array(z.unknown()),
  sessions: z.array(z.unknown()),
  ownedCampaigns: z.array(z.unknown()),
  characters: z.array(z.unknown()),
  playerIn: z.array(z.unknown()),
  diceRollLogs: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));