import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageWhereInputObjectSchema as MapImageWhereInputObjectSchema } from './MapImageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MapImageWhereInputObjectSchema).optional(),
  some: z.lazy(() => MapImageWhereInputObjectSchema).optional(),
  none: z.lazy(() => MapImageWhereInputObjectSchema).optional()
}).strict();
export const MapImageListRelationFilterObjectSchema: z.ZodType<Prisma.MapImageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MapImageListRelationFilter>;
export const MapImageListRelationFilterObjectZodSchema = makeSchema();
