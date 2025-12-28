import * as z from 'zod';
// prettier-ignore
export const LandmarkDetailModelSchema = z.object({
    id: z.string(),
    description: z.string(),
    effect: z.string().nullable(),
    Landmark: z.unknown().nullable(),
    landmarkId: z.string().nullable(),
    HexCell: z.array(z.unknown())
}).strict();

export type LandmarkDetailPureType = z.infer<typeof LandmarkDetailModelSchema>;
