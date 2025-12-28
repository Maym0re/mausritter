import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { HexCellUpdateManyWithoutHexTypeNestedInputObjectSchema as HexCellUpdateManyWithoutHexTypeNestedInputObjectSchema } from './HexCellUpdateManyWithoutHexTypeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  HexCell: z.lazy(() => HexCellUpdateManyWithoutHexTypeNestedInputObjectSchema).optional()
}).strict();
export const HexTypeUpdateWithoutLandmarksInputObjectSchema: z.ZodType<Prisma.HexTypeUpdateWithoutLandmarksInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUpdateWithoutLandmarksInput>;
export const HexTypeUpdateWithoutLandmarksInputObjectZodSchema = makeSchema();
