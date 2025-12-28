import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema as LandmarkUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateNestedManyWithoutHexTypeInput.schema';
import { HexCellUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema as HexCellUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  landmarks: z.lazy(() => LandmarkUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema).optional()
}).strict();
export const HexTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.HexTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUncheckedCreateInput>;
export const HexTypeUncheckedCreateInputObjectZodSchema = makeSchema();
