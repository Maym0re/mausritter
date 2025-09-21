import { z } from 'zod';
export const CharacterFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  notes: z.string().optional(),
  playerId: z.string(),
  player: z.unknown(),
  campaignId: z.string(),
  campaign: z.unknown(),
  str: z.number().int(),
  dex: z.number().int(),
  wil: z.number().int(),
  hp: z.number().int(),
  maxHp: z.number().int(),
  backgroundId: z.string(),
  birthsignId: z.string(),
  coatId: z.string(),
  background: z.unknown(),
  birthsign: z.unknown(),
  coat: z.unknown(),
  physicalDetail: z.string().optional(),
  level: z.number().int(),
  xp: z.number().int(),
  grit: z.number().int(),
  pips: z.number().int(),
  inventory: z.array(z.unknown()),
  conditions: z.array(z.unknown()),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
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