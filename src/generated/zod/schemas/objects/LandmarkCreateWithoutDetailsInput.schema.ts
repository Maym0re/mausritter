import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeCreateNestedOneWithoutLandmarksInputObjectSchema as HexTypeCreateNestedOneWithoutLandmarksInputObjectSchema } from './HexTypeCreateNestedOneWithoutLandmarksInput.schema';
import { HexCellCreateNestedManyWithoutLandmarkInputObjectSchema as HexCellCreateNestedManyWithoutLandmarkInputObjectSchema } from './HexCellCreateNestedManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  hexType: z.lazy(() => HexTypeCreateNestedOneWithoutLandmarksInputObjectSchema),
  HexCell: z.lazy(() => HexCellCreateNestedManyWithoutLandmarkInputObjectSchema).optional()
}).strict();
export const LandmarkCreateWithoutDetailsInputObjectSchema: z.ZodType<Prisma.LandmarkCreateWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateWithoutDetailsInput>;
export const LandmarkCreateWithoutDetailsInputObjectZodSchema = makeSchema();
