import { z } from 'zod';

// prettier-ignore
export const HexTypeResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: z.string(),
    description: z.string(),
    landmarks: z.array(z.unknown()).array(),
    HexCell: z.array(z.unknown()).array()
}).strict();

export type HexTypeResultType = z.infer<typeof HexTypeResultSchema>;
