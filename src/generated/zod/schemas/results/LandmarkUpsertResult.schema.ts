import { z } from 'zod';
export const LandmarkUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  hexTypeId: z.string(),
  hexType: z.unknown(),
  details: z.array(z.unknown()),
  HexCell: z.array(z.unknown())
});