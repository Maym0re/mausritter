import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateNestedManyWithoutHexTypeInput.schema';
import { HexCellUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  landmarks: z.lazy(() => LandmarkUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema),
  HexCell: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema)
}).strict();
export const HexTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.HexTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUncheckedCreateInput>;
export const HexTypeUncheckedCreateInputObjectZodSchema = makeSchema();
