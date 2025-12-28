import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeCreateNestedOneWithoutLandmarksInputObjectSchema as HexTypeCreateNestedOneWithoutLandmarksInputObjectSchema } from './HexTypeCreateNestedOneWithoutLandmarksInput.schema';
import { LandmarkDetailCreateNestedManyWithoutLandmarkInputObjectSchema as LandmarkDetailCreateNestedManyWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateNestedManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  hexType: z.lazy(() => HexTypeCreateNestedOneWithoutLandmarksInputObjectSchema),
  details: z.lazy(() => LandmarkDetailCreateNestedManyWithoutLandmarkInputObjectSchema).optional()
}).strict();
export const LandmarkCreateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkCreateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateWithoutHexCellInput>;
export const LandmarkCreateWithoutHexCellInputObjectZodSchema = makeSchema();
