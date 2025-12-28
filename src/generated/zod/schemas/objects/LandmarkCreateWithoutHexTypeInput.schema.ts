import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailCreateNestedManyWithoutLandmarkInputObjectSchema as LandmarkDetailCreateNestedManyWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateNestedManyWithoutLandmarkInput.schema';
import { HexCellCreateNestedManyWithoutLandmarkInputObjectSchema as HexCellCreateNestedManyWithoutLandmarkInputObjectSchema } from './HexCellCreateNestedManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  details: z.lazy(() => LandmarkDetailCreateNestedManyWithoutLandmarkInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellCreateNestedManyWithoutLandmarkInputObjectSchema).optional()
}).strict();
export const LandmarkCreateWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkCreateWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateWithoutHexTypeInput>;
export const LandmarkCreateWithoutHexTypeInputObjectZodSchema = makeSchema();
