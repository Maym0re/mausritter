import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LandmarkUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema as LandmarkUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema } from './LandmarkUncheckedUpdateManyWithoutHexTypeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  landmarks: z.lazy(() => LandmarkUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema).optional()
}).strict();
export const HexTypeUncheckedUpdateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.HexTypeUncheckedUpdateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUncheckedUpdateWithoutHexCellInput>;
export const HexTypeUncheckedUpdateWithoutHexCellInputObjectZodSchema = makeSchema();
