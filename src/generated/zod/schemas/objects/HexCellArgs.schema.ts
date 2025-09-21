import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellSelectObjectSchema } from './HexCellSelect.schema';
import { HexCellIncludeObjectSchema } from './HexCellInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => HexCellSelectObjectSchema).optional(),
  include: z.lazy(() => HexCellIncludeObjectSchema).optional()
}).strict();
export const HexCellArgsObjectSchema = makeSchema();
export const HexCellArgsObjectZodSchema = makeSchema();
