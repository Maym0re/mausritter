import * as z from 'zod';
export const HexMapUpdateResultSchema = z.nullable(z.object({
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
}));