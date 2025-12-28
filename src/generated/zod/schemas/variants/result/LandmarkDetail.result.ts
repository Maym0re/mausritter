import * as z from 'zod';
// prettier-ignore
export const LandmarkDetailResultSchema = z.object({
    id: z.string(),
    description: z.string(),
    effect: z.string().nullable(),
    Landmark: z.unknown().nullable(),
    landmarkId: z.string().nullable(),
    HexCell: z.array(z.unknown())
}).strict();

export type LandmarkDetailResultType = z.infer<typeof LandmarkDetailResultSchema>;
