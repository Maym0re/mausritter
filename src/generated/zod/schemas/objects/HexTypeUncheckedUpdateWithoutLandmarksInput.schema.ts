import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { HexCellUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutHexTypeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  HexCell: z.lazy(() => HexCellUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema).optional()
}).strict();
export const HexTypeUncheckedUpdateWithoutLandmarksInputObjectSchema: z.ZodType<Prisma.HexTypeUncheckedUpdateWithoutLandmarksInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUncheckedUpdateWithoutLandmarksInput>;
export const HexTypeUncheckedUpdateWithoutLandmarksInputObjectZodSchema = makeSchema();
