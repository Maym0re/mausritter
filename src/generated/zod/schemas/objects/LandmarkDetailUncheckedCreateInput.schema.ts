import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellUncheckedCreateNestedManyWithoutLandmarkDetailInputObjectSchema as HexCellUncheckedCreateNestedManyWithoutLandmarkDetailInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutLandmarkDetailInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string().optional().nullable(),
  landmarkId: z.string().optional().nullable(),
  HexCell: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutLandmarkDetailInputObjectSchema).optional()
}).strict();
export const LandmarkDetailUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUncheckedCreateInput>;
export const LandmarkDetailUncheckedCreateInputObjectZodSchema = makeSchema();
