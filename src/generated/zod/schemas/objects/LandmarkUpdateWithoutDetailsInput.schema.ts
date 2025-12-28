import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { HexTypeUpdateOneRequiredWithoutLandmarksNestedInputObjectSchema as HexTypeUpdateOneRequiredWithoutLandmarksNestedInputObjectSchema } from './HexTypeUpdateOneRequiredWithoutLandmarksNestedInput.schema';
import { HexCellUpdateManyWithoutLandmarkNestedInputObjectSchema as HexCellUpdateManyWithoutLandmarkNestedInputObjectSchema } from './HexCellUpdateManyWithoutLandmarkNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hexType: z.lazy(() => HexTypeUpdateOneRequiredWithoutLandmarksNestedInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellUpdateManyWithoutLandmarkNestedInputObjectSchema).optional()
}).strict();
export const LandmarkUpdateWithoutDetailsInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateWithoutDetailsInput>;
export const LandmarkUpdateWithoutDetailsInputObjectZodSchema = makeSchema();
