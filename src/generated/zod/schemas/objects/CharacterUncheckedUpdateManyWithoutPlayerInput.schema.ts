import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CharacterUncheckedUpdateManyWithoutPlayerInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedUpdateManyWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUncheckedUpdateManyWithoutPlayerInput>;
export const CharacterUncheckedUpdateManyWithoutPlayerInputObjectZodSchema = makeSchema();
