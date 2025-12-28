import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeSelectObjectSchema as HexTypeSelectObjectSchema } from './HexTypeSelect.schema';
import { HexTypeIncludeObjectSchema as HexTypeIncludeObjectSchema } from './HexTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => HexTypeSelectObjectSchema).optional(),
  include: z.lazy(() => HexTypeIncludeObjectSchema).optional()
}).strict();
export const HexTypeArgsObjectSchema = makeSchema();
export const HexTypeArgsObjectZodSchema = makeSchema();
