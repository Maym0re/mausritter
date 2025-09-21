import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapArgsObjectSchema } from './HexMapArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  hexMapId: z.boolean().optional(),
  hexMap: z.union([z.boolean(), z.lazy(() => HexMapArgsObjectSchema)]).optional(),
  image: z.boolean().optional(),
  x: z.boolean().optional(),
  y: z.boolean().optional(),
  z: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const MapMarkerSelectObjectSchema: z.ZodType<Prisma.MapMarkerSelect> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerSelect>;
export const MapMarkerSelectObjectZodSchema = makeSchema();
