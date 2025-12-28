import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema as LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema } from './LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hexTypeId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  details: z.lazy(() => LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema).optional()
}).strict();
export const LandmarkUncheckedUpdateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedUpdateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedUpdateWithoutHexCellInput>;
export const LandmarkUncheckedUpdateWithoutHexCellInputObjectZodSchema = makeSchema();
