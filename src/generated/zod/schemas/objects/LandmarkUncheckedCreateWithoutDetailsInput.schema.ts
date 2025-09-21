import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  hexTypeId: z.string(),
  HexCell: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema).optional()
}).strict();
export const LandmarkUncheckedCreateWithoutDetailsInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedCreateWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedCreateWithoutDetailsInput>;
export const LandmarkUncheckedCreateWithoutDetailsInputObjectZodSchema = makeSchema();
