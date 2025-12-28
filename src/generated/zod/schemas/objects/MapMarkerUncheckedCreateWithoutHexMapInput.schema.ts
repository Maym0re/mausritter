import * as z from 'zod';
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
export const MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapMarkerUncheckedCreateWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerUncheckedCreateWithoutHexMapInput>;
export const MapMarkerUncheckedCreateWithoutHexMapInputObjectZodSchema = makeSchema();
