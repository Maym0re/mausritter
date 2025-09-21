import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema } from './LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInput.schema';
import { HexCellUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutLandmarkNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  details: z.lazy(() => LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema).optional()
}).strict();
export const LandmarkUncheckedUpdateWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedUpdateWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedUpdateWithoutHexTypeInput>;
export const LandmarkUncheckedUpdateWithoutHexTypeInputObjectZodSchema = makeSchema();
