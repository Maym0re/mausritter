import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hexTypeId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LandmarkUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedUpdateManyInput>;
export const LandmarkUncheckedUpdateManyInputObjectZodSchema = makeSchema();
