import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema as LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema } from './LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInput.schema';
import { HexCellUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema as HexCellUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutLandmarkNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hexTypeId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  details: z.lazy(() => LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema).optional()
}).strict();
export const LandmarkUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedUpdateInput>;
export const LandmarkUncheckedUpdateInputObjectZodSchema = makeSchema();
