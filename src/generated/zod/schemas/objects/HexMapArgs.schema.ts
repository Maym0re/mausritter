import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapSelectObjectSchema } from './HexMapSelect.schema';
import { HexMapIncludeObjectSchema } from './HexMapInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => HexMapSelectObjectSchema).optional(),
  include: z.lazy(() => HexMapIncludeObjectSchema).optional()
}).strict();
export const HexMapArgsObjectSchema = makeSchema();
export const HexMapArgsObjectZodSchema = makeSchema();
