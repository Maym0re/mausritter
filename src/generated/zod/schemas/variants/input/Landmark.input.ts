import * as z from 'zod';
// prettier-ignore
export const LandmarkInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    hexTypeId: z.string(),
    hexType: z.unknown(),
    details: z.array(z.unknown()),
    HexCell: z.array(z.unknown())
}).strict();

export type LandmarkInputType = z.infer<typeof LandmarkInputSchema>;
