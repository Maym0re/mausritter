import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateNestedOneWithoutMarkersInputObjectSchema } from './HexMapCreateNestedOneWithoutMarkersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  image: z.string(),
  x: z.number(),
  y: z.number(),
  z: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  hexMap: z.lazy(() => HexMapCreateNestedOneWithoutMarkersInputObjectSchema)
}).strict();
export const MapMarkerCreateInputObjectSchema: z.ZodType<Prisma.MapMarkerCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerCreateInput>;
export const MapMarkerCreateInputObjectZodSchema = makeSchema();
