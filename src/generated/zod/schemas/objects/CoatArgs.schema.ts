import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatSelectObjectSchema } from './CoatSelect.schema';
import { CoatIncludeObjectSchema } from './CoatInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CoatSelectObjectSchema).optional(),
  include: z.lazy(() => CoatIncludeObjectSchema).optional()
}).strict();
export const CoatArgsObjectSchema = makeSchema();
export const CoatArgsObjectZodSchema = makeSchema();
