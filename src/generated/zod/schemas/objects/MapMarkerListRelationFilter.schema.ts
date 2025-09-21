import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerWhereInputObjectSchema } from './MapMarkerWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MapMarkerWhereInputObjectSchema).optional(),
  some: z.lazy(() => MapMarkerWhereInputObjectSchema).optional(),
  none: z.lazy(() => MapMarkerWhereInputObjectSchema).optional()
}).strict();
export const MapMarkerListRelationFilterObjectSchema: z.ZodType<Prisma.MapMarkerListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerListRelationFilter>;
export const MapMarkerListRelationFilterObjectZodSchema = makeSchema();
