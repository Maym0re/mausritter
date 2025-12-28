import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkSelectObjectSchema as LandmarkSelectObjectSchema } from './LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema as LandmarkIncludeObjectSchema } from './LandmarkInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LandmarkSelectObjectSchema).optional(),
  include: z.lazy(() => LandmarkIncludeObjectSchema).optional()
}).strict();
export const LandmarkArgsObjectSchema = makeSchema();
export const LandmarkArgsObjectZodSchema = makeSchema();
