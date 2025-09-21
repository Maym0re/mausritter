import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BirthsignSelectObjectSchema } from './BirthsignSelect.schema';
import { BirthsignIncludeObjectSchema } from './BirthsignInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BirthsignSelectObjectSchema).optional(),
  include: z.lazy(() => BirthsignIncludeObjectSchema).optional()
}).strict();
export const BirthsignArgsObjectSchema = makeSchema();
export const BirthsignArgsObjectZodSchema = makeSchema();
