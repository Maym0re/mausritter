import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateNestedManyWithoutHexTypeInputObjectSchema } from './LandmarkCreateNestedManyWithoutHexTypeInput.schema';
import { HexCellCreateNestedManyWithoutHexTypeInputObjectSchema } from './HexCellCreateNestedManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  landmarks: z.lazy(() => LandmarkCreateNestedManyWithoutHexTypeInputObjectSchema),
  HexCell: z.lazy(() => HexCellCreateNestedManyWithoutHexTypeInputObjectSchema)
}).strict();
export const HexTypeCreateInputObjectSchema: z.ZodType<Prisma.HexTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCreateInput>;
export const HexTypeCreateInputObjectZodSchema = makeSchema();
