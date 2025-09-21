import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { InventoryItemUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema } from './InventoryItemUncheckedUpdateManyWithoutCharacterNestedInput.schema';
import { ConditionUncheckedUpdateManyWithoutCharactersNestedInputObjectSchema } from './ConditionUncheckedUpdateManyWithoutCharactersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  campaignId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  str: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  dex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  wil: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  hp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  maxHp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  backgroundId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  birthsignId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  coatId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  physicalDetail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  level: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  xp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  grit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  pips: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  inventory: z.lazy(() => InventoryItemUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema).optional(),
  conditions: z.lazy(() => ConditionUncheckedUpdateManyWithoutCharactersNestedInputObjectSchema).optional()
}).strict();
export const CharacterUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUncheckedUpdateInput>;
export const CharacterUncheckedUpdateInputObjectZodSchema = makeSchema();
