import { z } from 'zod';

// prettier-ignore
export const HexTypeModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: z.string(),
    description: z.string(),
    landmarks: z.array(z.unknown()).array(),
    HexCell: z.array(z.unknown()).array()
}).strict();

export type HexTypeModelType = z.infer<typeof HexTypeModelSchema>;
