import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateNestedManyWithoutHexTypeInputObjectSchema as LandmarkCreateNestedManyWithoutHexTypeInputObjectSchema } from './LandmarkCreateNestedManyWithoutHexTypeInput.schema';
import { HexCellCreateNestedManyWithoutHexTypeInputObjectSchema as HexCellCreateNestedManyWithoutHexTypeInputObjectSchema } from './HexCellCreateNestedManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  landmarks: z.lazy(() => LandmarkCreateNestedManyWithoutHexTypeInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellCreateNestedManyWithoutHexTypeInputObjectSchema).optional()
}).strict();
export const HexTypeCreateInputObjectSchema: z.ZodType<Prisma.HexTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCreateInput>;
export const HexTypeCreateInputObjectZodSchema = makeSchema();
