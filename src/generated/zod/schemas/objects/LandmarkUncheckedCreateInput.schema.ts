import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema as LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInput.schema';
import { HexCellUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema as HexCellUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  hexTypeId: z.string(),
  details: z.lazy(() => LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema).optional()
}).strict();
export const LandmarkUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedCreateInput>;
export const LandmarkUncheckedCreateInputObjectZodSchema = makeSchema();
