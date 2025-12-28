import * as z from 'zod';
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
export const CharacterAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterAvgOrderByAggregateInput>;
export const CharacterAvgOrderByAggregateInputObjectZodSchema = makeSchema();
