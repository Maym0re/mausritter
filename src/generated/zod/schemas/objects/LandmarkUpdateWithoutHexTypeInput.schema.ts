import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LandmarkDetailUpdateManyWithoutLandmarkNestedInputObjectSchema } from './LandmarkDetailUpdateManyWithoutLandmarkNestedInput.schema';
import { HexCellUpdateManyWithoutLandmarkNestedInputObjectSchema } from './HexCellUpdateManyWithoutLandmarkNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  details: z.lazy(() => LandmarkDetailUpdateManyWithoutLandmarkNestedInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellUpdateManyWithoutLandmarkNestedInputObjectSchema).optional()
}).strict();
export const LandmarkUpdateWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateWithoutHexTypeInput>;
export const LandmarkUpdateWithoutHexTypeInputObjectZodSchema = makeSchema();
