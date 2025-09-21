import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BirthsignCountOutputTypeSelectObjectSchema } from './BirthsignCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BirthsignCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const BirthsignCountOutputTypeArgsObjectSchema = makeSchema();
export const BirthsignCountOutputTypeArgsObjectZodSchema = makeSchema();
