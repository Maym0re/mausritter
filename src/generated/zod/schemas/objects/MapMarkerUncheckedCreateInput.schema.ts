import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  hexMapId: z.string(),
  image: z.string(),
  x: z.number(),
  y: z.number(),
  z: z.number().int().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const MapMarkerUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MapMarkerUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerUncheckedCreateInput>;
export const MapMarkerUncheckedCreateInputObjectZodSchema = makeSchema();
