import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateNestedManyWithoutLandmarkDetailInputObjectSchema as HexCellCreateNestedManyWithoutLandmarkDetailInputObjectSchema } from './HexCellCreateNestedManyWithoutLandmarkDetailInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string().optional().nullable(),
  HexCell: z.lazy(() => HexCellCreateNestedManyWithoutLandmarkDetailInputObjectSchema).optional()
}).strict();
export const LandmarkDetailCreateWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateWithoutLandmarkInput>;
export const LandmarkDetailCreateWithoutLandmarkInputObjectZodSchema = makeSchema();
