import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateNestedManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  landmarks: z.lazy(() => LandmarkUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema).optional()
}).strict();
export const HexTypeUncheckedCreateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.HexTypeUncheckedCreateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUncheckedCreateWithoutHexCellInput>;
export const HexTypeUncheckedCreateWithoutHexCellInputObjectZodSchema = makeSchema();
