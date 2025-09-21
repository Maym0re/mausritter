import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailCountOutputTypeSelectObjectSchema } from './LandmarkDetailCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LandmarkDetailCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const LandmarkDetailCountOutputTypeArgsObjectSchema = makeSchema();
export const LandmarkDetailCountOutputTypeArgsObjectZodSchema = makeSchema();
