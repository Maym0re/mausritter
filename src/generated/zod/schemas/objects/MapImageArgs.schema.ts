import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageSelectObjectSchema as MapImageSelectObjectSchema } from './MapImageSelect.schema';
import { MapImageIncludeObjectSchema as MapImageIncludeObjectSchema } from './MapImageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MapImageSelectObjectSchema).optional(),
  include: z.lazy(() => MapImageIncludeObjectSchema).optional()
}).strict();
export const MapImageArgsObjectSchema = makeSchema();
export const MapImageArgsObjectZodSchema = makeSchema();
