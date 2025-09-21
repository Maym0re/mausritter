import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  str: SortOrderSchema.optional(),
  dex: SortOrderSchema.optional(),
  wil: SortOrderSchema.optional(),
  hp: SortOrderSchema.optional(),
  maxHp: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  xp: SortOrderSchema.optional(),
  grit: SortOrderSchema.optional(),
  pips: SortOrderSchema.optional()
}).strict();
export const CharacterSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterSumOrderByAggregateInput>;
export const CharacterSumOrderByAggregateInputObjectZodSchema = makeSchema();
