import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameTimeSelectObjectSchema } from './GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema } from './GameTimeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GameTimeSelectObjectSchema).optional(),
  include: z.lazy(() => GameTimeIncludeObjectSchema).optional()
}).strict();
export const GameTimeArgsObjectSchema = makeSchema();
export const GameTimeArgsObjectZodSchema = makeSchema();
