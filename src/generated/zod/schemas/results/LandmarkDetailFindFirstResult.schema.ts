import { z } from 'zod';
export const LandmarkDetailFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string().optional(),
  Landmark: z.unknown().optional(),
  landmarkId: z.string().optional(),
  HexCell: z.array(z.unknown())
}));