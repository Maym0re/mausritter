import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LandmarkUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema } from './LandmarkUncheckedUpdateManyWithoutHexTypeNestedInput.schema';
import { HexCellUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutHexTypeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  landmarks: z.lazy(() => LandmarkUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema).optional()
}).strict();
export const HexTypeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.HexTypeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUncheckedUpdateInput>;
export const HexTypeUncheckedUpdateInputObjectZodSchema = makeSchema();
