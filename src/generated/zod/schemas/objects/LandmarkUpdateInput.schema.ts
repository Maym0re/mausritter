import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { HexTypeUpdateOneRequiredWithoutLandmarksNestedInputObjectSchema as HexTypeUpdateOneRequiredWithoutLandmarksNestedInputObjectSchema } from './HexTypeUpdateOneRequiredWithoutLandmarksNestedInput.schema';
import { LandmarkDetailUpdateManyWithoutLandmarkNestedInputObjectSchema as LandmarkDetailUpdateManyWithoutLandmarkNestedInputObjectSchema } from './LandmarkDetailUpdateManyWithoutLandmarkNestedInput.schema';
import { HexCellUpdateManyWithoutLandmarkNestedInputObjectSchema as HexCellUpdateManyWithoutLandmarkNestedInputObjectSchema } from './HexCellUpdateManyWithoutLandmarkNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hexType: z.lazy(() => HexTypeUpdateOneRequiredWithoutLandmarksNestedInputObjectSchema).optional(),
  details: z.lazy(() => LandmarkDetailUpdateManyWithoutLandmarkNestedInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellUpdateManyWithoutLandmarkNestedInputObjectSchema).optional()
}).strict();
export const LandmarkUpdateInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateInput>;
export const LandmarkUpdateInputObjectZodSchema = makeSchema();
