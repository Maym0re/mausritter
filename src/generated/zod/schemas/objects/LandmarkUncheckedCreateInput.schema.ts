import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInput.schema';
import { HexCellUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  hexTypeId: z.string(),
  details: z.lazy(() => LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema),
  HexCell: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema)
}).strict();
export const LandmarkUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedCreateInput>;
export const LandmarkUncheckedCreateInputObjectZodSchema = makeSchema();
