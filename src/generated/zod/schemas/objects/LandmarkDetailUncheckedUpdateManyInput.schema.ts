import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  landmarkId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const LandmarkDetailUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUncheckedUpdateManyInput>;
export const LandmarkDetailUncheckedUpdateManyInputObjectZodSchema = makeSchema();
