import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerSelectObjectSchema as MapMarkerSelectObjectSchema } from './MapMarkerSelect.schema';
import { MapMarkerIncludeObjectSchema as MapMarkerIncludeObjectSchema } from './MapMarkerInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MapMarkerSelectObjectSchema).optional(),
  include: z.lazy(() => MapMarkerIncludeObjectSchema).optional()
}).strict();
export const MapMarkerArgsObjectSchema = makeSchema();
export const MapMarkerArgsObjectZodSchema = makeSchema();
