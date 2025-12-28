import * as z from 'zod';
// prettier-ignore
export const LandmarkModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    hexTypeId: z.string(),
    hexType: z.unknown(),
    details: z.array(z.unknown()),
    HexCell: z.array(z.unknown())
}).strict();

export type LandmarkPureType = z.infer<typeof LandmarkModelSchema>;
