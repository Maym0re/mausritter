import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageSelectObjectSchema } from './MapImageSelect.schema';
import { MapImageIncludeObjectSchema } from './MapImageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MapImageSelectObjectSchema).optional(),
  include: z.lazy(() => MapImageIncludeObjectSchema).optional()
}).strict();
export const MapImageArgsObjectSchema = makeSchema();
export const MapImageArgsObjectZodSchema = makeSchema();
