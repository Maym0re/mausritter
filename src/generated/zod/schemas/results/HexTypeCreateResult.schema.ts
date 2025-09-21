import { z } from 'zod';
export const HexTypeCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  landmarks: z.array(z.unknown()),
  HexCell: z.array(z.unknown())
});