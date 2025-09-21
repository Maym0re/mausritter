import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellUncheckedCreateNestedManyWithoutLandmarkDetailInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutLandmarkDetailInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string().optional().nullable(),
  HexCell: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutLandmarkDetailInputObjectSchema).optional()
}).strict();
export const LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUncheckedCreateWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUncheckedCreateWithoutLandmarkInput>;
export const LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectZodSchema = makeSchema();
