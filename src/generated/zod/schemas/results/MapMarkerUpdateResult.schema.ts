import { z } from 'zod';
export const MapMarkerUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  hexMapId: z.string(),
  hexMap: z.unknown(),
  image: z.string(),
  x: z.number(),
  y: z.number(),
  z: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date()
}));