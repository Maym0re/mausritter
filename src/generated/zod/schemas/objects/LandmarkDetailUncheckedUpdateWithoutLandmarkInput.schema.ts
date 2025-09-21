import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { HexCellUncheckedUpdateManyWithoutLandmarkDetailNestedInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutLandmarkDetailNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  HexCell: z.lazy(() => HexCellUncheckedUpdateManyWithoutLandmarkDetailNestedInputObjectSchema).optional()
}).strict();
export const LandmarkDetailUncheckedUpdateWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUncheckedUpdateWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUncheckedUpdateWithoutLandmarkInput>;
export const LandmarkDetailUncheckedUpdateWithoutLandmarkInputObjectZodSchema = makeSchema();
