import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LandmarkUncheckedUpdateManyWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedUpdateManyWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedUpdateManyWithoutHexTypeInput>;
export const LandmarkUncheckedUpdateManyWithoutHexTypeInputObjectZodSchema = makeSchema();
