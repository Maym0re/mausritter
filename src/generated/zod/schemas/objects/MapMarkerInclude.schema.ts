import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapArgsObjectSchema } from './HexMapArgs.schema'

const makeSchema = () => z.object({
  hexMap: z.union([z.boolean(), z.lazy(() => HexMapArgsObjectSchema)]).optional()
}).strict();
export const MapMarkerIncludeObjectSchema: z.ZodType<Prisma.MapMarkerInclude> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerInclude>;
export const MapMarkerIncludeObjectZodSchema = makeSchema();
