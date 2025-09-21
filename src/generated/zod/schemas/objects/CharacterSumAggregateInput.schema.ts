import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  str: z.literal(true).optional(),
  dex: z.literal(true).optional(),
  wil: z.literal(true).optional(),
  hp: z.literal(true).optional(),
  maxHp: z.literal(true).optional(),
  level: z.literal(true).optional(),
  xp: z.literal(true).optional(),
  grit: z.literal(true).optional(),
  pips: z.literal(true).optional()
}).strict();
export const CharacterSumAggregateInputObjectSchema: z.ZodType<Prisma.CharacterSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CharacterSumAggregateInputType>;
export const CharacterSumAggregateInputObjectZodSchema = makeSchema();
