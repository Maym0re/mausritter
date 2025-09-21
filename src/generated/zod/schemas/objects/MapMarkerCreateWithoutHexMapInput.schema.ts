import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  image: z.string(),
  x: z.number(),
  y: z.number(),
  z: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const MapMarkerCreateWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapMarkerCreateWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerCreateWithoutHexMapInput>;
export const MapMarkerCreateWithoutHexMapInputObjectZodSchema = makeSchema();
