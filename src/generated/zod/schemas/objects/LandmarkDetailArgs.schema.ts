import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailSelectObjectSchema } from './LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema } from './LandmarkDetailInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LandmarkDetailSelectObjectSchema).optional(),
  include: z.lazy(() => LandmarkDetailIncludeObjectSchema).optional()
}).strict();
export const LandmarkDetailArgsObjectSchema = makeSchema();
export const LandmarkDetailArgsObjectZodSchema = makeSchema();
