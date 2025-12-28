import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  playerId: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  str: SortOrderSchema.optional(),
  dex: SortOrderSchema.optional(),
  wil: SortOrderSchema.optional(),
  hp: SortOrderSchema.optional(),
  maxHp: SortOrderSchema.optional(),
  backgroundId: SortOrderSchema.optional(),
  birthsignId: SortOrderSchema.optional(),
  coatId: SortOrderSchema.optional(),
  physicalDetail: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  xp: SortOrderSchema.optional(),
  grit: SortOrderSchema.optional(),
  pips: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CharacterMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterMaxOrderByAggregateInput>;
export const CharacterMaxOrderByAggregateInputObjectZodSchema = makeSchema();
