import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CharacterUpdateManyWithoutCoatNestedInputObjectSchema as CharacterUpdateManyWithoutCoatNestedInputObjectSchema } from './CharacterUpdateManyWithoutCoatNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pattern: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  characters: z.lazy(() => CharacterUpdateManyWithoutCoatNestedInputObjectSchema).optional()
}).strict();
export const CoatUpdateInputObjectSchema: z.ZodType<Prisma.CoatUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatUpdateInput>;
export const CoatUpdateInputObjectZodSchema = makeSchema();
