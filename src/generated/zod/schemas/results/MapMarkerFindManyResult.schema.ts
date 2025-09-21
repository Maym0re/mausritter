import { z } from 'zod';
export const MapMarkerFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  hexMapId: z.string(),
  hexMap: z.unknown(),
  image: z.string(),
  x: z.number(),
  y: z.number(),
  z: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});