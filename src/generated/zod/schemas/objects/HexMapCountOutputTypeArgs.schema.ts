import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCountOutputTypeSelectObjectSchema } from './HexMapCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => HexMapCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const HexMapCountOutputTypeArgsObjectSchema = makeSchema();
export const HexMapCountOutputTypeArgsObjectZodSchema = makeSchema();
