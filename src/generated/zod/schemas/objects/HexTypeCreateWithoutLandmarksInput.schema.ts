import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateNestedManyWithoutHexTypeInputObjectSchema as HexCellCreateNestedManyWithoutHexTypeInputObjectSchema } from './HexCellCreateNestedManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  HexCell: z.lazy(() => HexCellCreateNestedManyWithoutHexTypeInputObjectSchema).optional()
}).strict();
export const HexTypeCreateWithoutLandmarksInputObjectSchema: z.ZodType<Prisma.HexTypeCreateWithoutLandmarksInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCreateWithoutLandmarksInput>;
export const HexTypeCreateWithoutLandmarksInputObjectZodSchema = makeSchema();
