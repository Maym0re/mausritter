import * as z from 'zod';
export const CampaignAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});