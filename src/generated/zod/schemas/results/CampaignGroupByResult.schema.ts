import { z } from 'zod';
export const CampaignGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  isActive: z.boolean(),
  gmId: z.string(),
  weatherEntryId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  todaysEvent: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    isActive: z.number(),
    gmId: z.number(),
    gm: z.number(),
    players: z.number(),
    characters: z.number(),
    gameTime: z.number(),
    season: z.number(),
    weatherEntryId: z.number(),
    weatherEntry: z.number(),
    hexMap: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    todaysEvent: z.number(),
    diceRolls: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    gmId: z.string().nullable(),
    weatherEntryId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    todaysEvent: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    gmId: z.string().nullable(),
    weatherEntryId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    todaysEvent: z.string().nullable()
  }).nullable().optional()
}));