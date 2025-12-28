import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  landmarkId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUncheckedUpdateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUncheckedUpdateWithoutHexCellInput>;
export const LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectZodSchema = makeSchema();
