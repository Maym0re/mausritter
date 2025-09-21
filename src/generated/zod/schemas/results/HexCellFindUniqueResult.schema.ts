import { z } from 'zod';
export const HexCellFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  hexMapId: z.string(),
  hexMap: z.unknown(),
  q: z.number().int(),
  r: z.number().int(),
  s: z.number().int(),
  hexTypeId: z.string(),
  hexType: z.unknown(),
  landmarkId: z.string().optional(),
  landmark: z.unknown().optional(),
  landmarkDetailId: z.string().optional(),
  landmarkDetail: z.unknown().optional(),
  settlementId: z.string().optional(),
  settlement: z.unknown().optional(),
  isRevealed: z.boolean(),
  notes: z.string(),
  customName: z.string().optional(),
  masterNotes: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));