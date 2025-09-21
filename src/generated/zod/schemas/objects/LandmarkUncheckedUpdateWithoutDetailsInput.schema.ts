import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { HexCellUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutLandmarkNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hexTypeId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  HexCell: z.lazy(() => HexCellUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema).optional()
}).strict();
export const LandmarkUncheckedUpdateWithoutDetailsInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedUpdateWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedUpdateWithoutDetailsInput>;
export const LandmarkUncheckedUpdateWithoutDetailsInputObjectZodSchema = makeSchema();
