import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { HexTypeUpdateOneRequiredWithoutLandmarksNestedInputObjectSchema } from './HexTypeUpdateOneRequiredWithoutLandmarksNestedInput.schema';
import { LandmarkDetailUpdateManyWithoutLandmarkNestedInputObjectSchema } from './LandmarkDetailUpdateManyWithoutLandmarkNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hexType: z.lazy(() => HexTypeUpdateOneRequiredWithoutLandmarksNestedInputObjectSchema).optional(),
  details: z.lazy(() => LandmarkDetailUpdateManyWithoutLandmarkNestedInputObjectSchema).optional()
}).strict();
export const LandmarkUpdateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateWithoutHexCellInput>;
export const LandmarkUpdateWithoutHexCellInputObjectZodSchema = makeSchema();
