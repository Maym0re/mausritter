import { z } from 'zod';

// prettier-ignore
export const LandmarkResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    hexTypeId: z.string(),
    hexType: z.unknown(),
    details: z.array(z.unknown()).array(),
    HexCell: z.array(z.unknown()).array()
}).strict();

export type LandmarkResultType = z.infer<typeof LandmarkResultSchema>;
