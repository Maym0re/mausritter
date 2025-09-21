import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkSelectObjectSchema } from './LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema } from './LandmarkInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LandmarkSelectObjectSchema).optional(),
  include: z.lazy(() => LandmarkIncludeObjectSchema).optional()
}).strict();
export const LandmarkArgsObjectSchema = makeSchema();
export const LandmarkArgsObjectZodSchema = makeSchema();
