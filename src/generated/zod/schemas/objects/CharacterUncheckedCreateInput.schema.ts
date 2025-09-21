import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemUncheckedCreateNestedManyWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedCreateNestedManyWithoutCharacterInput.schema';
import { ConditionUncheckedCreateNestedManyWithoutCharactersInputObjectSchema } from './ConditionUncheckedCreateNestedManyWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  notes: z.string().optional().nullable(),
  playerId: z.string(),
  campaignId: z.string(),
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
  inventory: z.lazy(() => InventoryItemUncheckedCreateNestedManyWithoutCharacterInputObjectSchema),
  conditions: z.lazy(() => ConditionUncheckedCreateNestedManyWithoutCharactersInputObjectSchema)
}).strict();
export const CharacterUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUncheckedCreateInput>;
export const CharacterUncheckedCreateInputObjectZodSchema = makeSchema();
