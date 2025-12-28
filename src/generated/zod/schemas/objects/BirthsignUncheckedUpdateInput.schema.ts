import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CharacterUncheckedUpdateManyWithoutBirthsignNestedInputObjectSchema as CharacterUncheckedUpdateManyWithoutBirthsignNestedInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutBirthsignNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sign: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  disposition: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  characters: z.lazy(() => CharacterUncheckedUpdateManyWithoutBirthsignNestedInputObjectSchema).optional()
}).strict();
export const BirthsignUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.BirthsignUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignUncheckedUpdateInput>;
export const BirthsignUncheckedUpdateInputObjectZodSchema = makeSchema();
