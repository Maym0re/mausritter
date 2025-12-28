import * as z from 'zod';
export const LandmarkDetailFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string().optional(),
  Landmark: z.unknown().optional(),
  landmarkId: z.string().optional(),
  HexCell: z.array(z.unknown())
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