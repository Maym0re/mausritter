import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCharactersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCharactersNestedInput.schema';
import { CampaignUpdateOneRequiredWithoutCharactersNestedInputObjectSchema } from './CampaignUpdateOneRequiredWithoutCharactersNestedInput.schema';
import { BirthsignUpdateOneRequiredWithoutCharactersNestedInputObjectSchema } from './BirthsignUpdateOneRequiredWithoutCharactersNestedInput.schema';
import { CoatUpdateOneRequiredWithoutCharactersNestedInputObjectSchema } from './CoatUpdateOneRequiredWithoutCharactersNestedInput.schema';
import { InventoryItemUpdateManyWithoutCharacterNestedInputObjectSchema } from './InventoryItemUpdateManyWithoutCharacterNestedInput.schema';
import { ConditionUpdateManyWithoutCharactersNestedInputObjectSchema } from './ConditionUpdateManyWithoutCharactersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  str: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  dex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  wil: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  hp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  maxHp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  physicalDetail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  level: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  xp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  grit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  pips: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  player: z.lazy(() => UserUpdateOneRequiredWithoutCharactersNestedInputObjectSchema).optional(),
  campaign: z.lazy(() => CampaignUpdateOneRequiredWithoutCharactersNestedInputObjectSchema).optional(),
  birthsign: z.lazy(() => BirthsignUpdateOneRequiredWithoutCharactersNestedInputObjectSchema).optional(),
  coat: z.lazy(() => CoatUpdateOneRequiredWithoutCharactersNestedInputObjectSchema).optional(),
  inventory: z.lazy(() => InventoryItemUpdateManyWithoutCharacterNestedInputObjectSchema).optional(),
  conditions: z.lazy(() => ConditionUpdateManyWithoutCharactersNestedInputObjectSchema).optional()
}).strict();
export const CharacterUpdateWithoutBackgroundInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithoutBackgroundInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateWithoutBackgroundInput>;
export const CharacterUpdateWithoutBackgroundInputObjectZodSchema = makeSchema();
