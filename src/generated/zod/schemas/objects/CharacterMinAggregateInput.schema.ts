import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  playerId: z.literal(true).optional(),
  campaignId: z.literal(true).optional(),
  str: z.literal(true).optional(),
  dex: z.literal(true).optional(),
  wil: z.literal(true).optional(),
  hp: z.literal(true).optional(),
  maxHp: z.literal(true).optional(),
  backgroundId: z.literal(true).optional(),
  birthsignId: z.literal(true).optional(),
  coatId: z.literal(true).optional(),
  physicalDetail: z.literal(true).optional(),
  level: z.literal(true).optional(),
  xp: z.literal(true).optional(),
  grit: z.literal(true).optional(),
  pips: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const CharacterMinAggregateInputObjectSchema: z.ZodType<Prisma.CharacterMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CharacterMinAggregateInputType>;
export const CharacterMinAggregateInputObjectZodSchema = makeSchema();
