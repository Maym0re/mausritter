import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { HexCellUpdateManyWithoutLandmarkDetailNestedInputObjectSchema as HexCellUpdateManyWithoutLandmarkDetailNestedInputObjectSchema } from './HexCellUpdateManyWithoutLandmarkDetailNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  HexCell: z.lazy(() => HexCellUpdateManyWithoutLandmarkDetailNestedInputObjectSchema).optional()
}).strict();
export const LandmarkDetailUpdateWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpdateWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateWithoutLandmarkInput>;
export const LandmarkDetailUpdateWithoutLandmarkInputObjectZodSchema = makeSchema();
