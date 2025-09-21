import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateNestedOneWithoutDetailsInputObjectSchema } from './LandmarkCreateNestedOneWithoutDetailsInput.schema';
import { HexCellCreateNestedManyWithoutLandmarkDetailInputObjectSchema } from './HexCellCreateNestedManyWithoutLandmarkDetailInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string().optional().nullable(),
  Landmark: z.lazy(() => LandmarkCreateNestedOneWithoutDetailsInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellCreateNestedManyWithoutLandmarkDetailInputObjectSchema)
}).strict();
export const LandmarkDetailCreateInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateInput>;
export const LandmarkDetailCreateInputObjectZodSchema = makeSchema();
