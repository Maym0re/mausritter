import * as z from 'zod';
export const HexMapFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  campaignId: z.string(),
  campaign: z.unknown(),
  size: z.number().int(),
  centerX: z.number().int(),
  centerY: z.number().int(),
  cells: z.array(z.unknown()),
  images: z.array(z.unknown()),
  markers: z.array(z.unknown()),
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