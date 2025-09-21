import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeCreateNestedOneWithoutLandmarksInputObjectSchema } from './HexTypeCreateNestedOneWithoutLandmarksInput.schema';
import { LandmarkDetailCreateNestedManyWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateNestedManyWithoutLandmarkInput.schema';
import { HexCellCreateNestedManyWithoutLandmarkInputObjectSchema } from './HexCellCreateNestedManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  hexType: z.lazy(() => HexTypeCreateNestedOneWithoutLandmarksInputObjectSchema),
  details: z.lazy(() => LandmarkDetailCreateNestedManyWithoutLandmarkInputObjectSchema),
  HexCell: z.lazy(() => HexCellCreateNestedManyWithoutLandmarkInputObjectSchema)
}).strict();
export const LandmarkCreateInputObjectSchema: z.ZodType<Prisma.LandmarkCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateInput>;
export const LandmarkCreateInputObjectZodSchema = makeSchema();
