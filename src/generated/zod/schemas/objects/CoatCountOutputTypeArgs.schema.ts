import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatCountOutputTypeSelectObjectSchema } from './CoatCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CoatCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CoatCountOutputTypeArgsObjectSchema = makeSchema();
export const CoatCountOutputTypeArgsObjectZodSchema = makeSchema();
