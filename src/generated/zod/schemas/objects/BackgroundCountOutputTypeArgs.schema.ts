import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BackgroundCountOutputTypeSelectObjectSchema } from './BackgroundCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BackgroundCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const BackgroundCountOutputTypeArgsObjectSchema = makeSchema();
export const BackgroundCountOutputTypeArgsObjectZodSchema = makeSchema();
