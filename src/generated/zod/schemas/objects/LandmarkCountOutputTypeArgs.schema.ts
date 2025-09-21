import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCountOutputTypeSelectObjectSchema } from './LandmarkCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LandmarkCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const LandmarkCountOutputTypeArgsObjectSchema = makeSchema();
export const LandmarkCountOutputTypeArgsObjectZodSchema = makeSchema();
