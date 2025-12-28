import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LandmarkUpdateManyWithoutHexTypeNestedInputObjectSchema as LandmarkUpdateManyWithoutHexTypeNestedInputObjectSchema } from './LandmarkUpdateManyWithoutHexTypeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  landmarks: z.lazy(() => LandmarkUpdateManyWithoutHexTypeNestedInputObjectSchema).optional()
}).strict();
export const HexTypeUpdateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.HexTypeUpdateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUpdateWithoutHexCellInput>;
export const HexTypeUpdateWithoutHexCellInputObjectZodSchema = makeSchema();
