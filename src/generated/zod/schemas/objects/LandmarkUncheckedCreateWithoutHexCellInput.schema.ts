import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema as LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  hexTypeId: z.string(),
  details: z.lazy(() => LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema).optional()
}).strict();
export const LandmarkUncheckedCreateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedCreateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedCreateWithoutHexCellInput>;
export const LandmarkUncheckedCreateWithoutHexCellInputObjectZodSchema = makeSchema();
