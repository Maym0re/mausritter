import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema as HexCellUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  HexCell: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema).optional()
}).strict();
export const HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema: z.ZodType<Prisma.HexTypeUncheckedCreateWithoutLandmarksInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUncheckedCreateWithoutLandmarksInput>;
export const HexTypeUncheckedCreateWithoutLandmarksInputObjectZodSchema = makeSchema();
