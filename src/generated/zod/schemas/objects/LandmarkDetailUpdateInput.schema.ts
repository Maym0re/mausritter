import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { LandmarkUpdateOneWithoutDetailsNestedInputObjectSchema } from './LandmarkUpdateOneWithoutDetailsNestedInput.schema';
import { HexCellUpdateManyWithoutLandmarkDetailNestedInputObjectSchema } from './HexCellUpdateManyWithoutLandmarkDetailNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Landmark: z.lazy(() => LandmarkUpdateOneWithoutDetailsNestedInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellUpdateManyWithoutLandmarkDetailNestedInputObjectSchema).optional()
}).strict();
export const LandmarkDetailUpdateInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateInput>;
export const LandmarkDetailUpdateInputObjectZodSchema = makeSchema();
