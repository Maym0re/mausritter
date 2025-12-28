import * as z from 'zod';
// prettier-ignore
export const LandmarkDetailInputSchema = z.object({
    id: z.string(),
    description: z.string(),
    effect: z.string().optional().nullable(),
    Landmark: z.unknown().optional().nullable(),
    landmarkId: z.string().optional().nullable(),
    HexCell: z.array(z.unknown())
}).strict();

export type LandmarkDetailInputType = z.infer<typeof LandmarkDetailInputSchema>;
