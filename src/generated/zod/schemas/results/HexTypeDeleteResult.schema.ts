import * as z from 'zod';
export const HexTypeDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  landmarks: z.array(z.unknown()),
  HexCell: z.array(z.unknown())
}));