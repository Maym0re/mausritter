import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LandmarkUpdateManyWithoutHexTypeNestedInputObjectSchema } from './LandmarkUpdateManyWithoutHexTypeNestedInput.schema';
import { HexCellUpdateManyWithoutHexTypeNestedInputObjectSchema } from './HexCellUpdateManyWithoutHexTypeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  landmarks: z.lazy(() => LandmarkUpdateManyWithoutHexTypeNestedInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellUpdateManyWithoutHexTypeNestedInputObjectSchema).optional()
}).strict();
export const HexTypeUpdateInputObjectSchema: z.ZodType<Prisma.HexTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUpdateInput>;
export const HexTypeUpdateInputObjectZodSchema = makeSchema();
