import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  notes: z.string().optional().nullable(),
  playerId: z.string(),
  str: z.number().int().optional(),
  dex: z.number().int().optional(),
  wil: z.number().int().optional(),
  hp: z.number().int().optional(),
  maxHp: z.number().int().optional(),
  backgroundId: z.string(),
  birthsignId: z.string(),
  coatId: z.string(),
  physicalDetail: z.string().optional().nullable(),
  level: z.number().int().optional(),
  xp: z.number().int().optional(),
  grit: z.number().int().optional(),
  pips: z.number().int().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CharacterCreateManyCampaignInputObjectSchema: z.ZodType<Prisma.CharacterCreateManyCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateManyCampaignInput>;
export const CharacterCreateManyCampaignInputObjectZodSchema = makeSchema();
