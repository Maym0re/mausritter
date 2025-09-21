import { z } from 'zod';
export const MapImageUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  hexMapId: z.string(),
  hexMap: z.unknown(),
  data: z.string(),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
}));