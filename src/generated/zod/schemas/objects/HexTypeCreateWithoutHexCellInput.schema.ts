import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateNestedManyWithoutHexTypeInputObjectSchema as LandmarkCreateNestedManyWithoutHexTypeInputObjectSchema } from './LandmarkCreateNestedManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  landmarks: z.lazy(() => LandmarkCreateNestedManyWithoutHexTypeInputObjectSchema).optional()
}).strict();
export const HexTypeCreateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.HexTypeCreateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCreateWithoutHexCellInput>;
export const HexTypeCreateWithoutHexCellInputObjectZodSchema = makeSchema();
