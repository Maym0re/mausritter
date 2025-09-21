import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CharacterUpdateManyWithoutBackgroundNestedInputObjectSchema } from './CharacterUpdateManyWithoutBackgroundNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  itemA: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  itemB: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  characters: z.lazy(() => CharacterUpdateManyWithoutBackgroundNestedInputObjectSchema).optional()
}).strict();
export const BackgroundUpdateInputObjectSchema: z.ZodType<Prisma.BackgroundUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundUpdateInput>;
export const BackgroundUpdateInputObjectZodSchema = makeSchema();
