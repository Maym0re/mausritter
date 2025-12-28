import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CharacterUncheckedUpdateManyWithoutCoatNestedInputObjectSchema as CharacterUncheckedUpdateManyWithoutCoatNestedInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutCoatNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pattern: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  characters: z.lazy(() => CharacterUncheckedUpdateManyWithoutCoatNestedInputObjectSchema).optional()
}).strict();
export const CoatUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CoatUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatUncheckedUpdateInput>;
export const CoatUncheckedUpdateInputObjectZodSchema = makeSchema();
