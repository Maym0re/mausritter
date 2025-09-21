import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { LandmarkUpdateOneWithoutDetailsNestedInputObjectSchema } from './LandmarkUpdateOneWithoutDetailsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Landmark: z.lazy(() => LandmarkUpdateOneWithoutDetailsNestedInputObjectSchema).optional()
}).strict();
export const LandmarkDetailUpdateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpdateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateWithoutHexCellInput>;
export const LandmarkDetailUpdateWithoutHexCellInputObjectZodSchema = makeSchema();
