import * as z from 'zod';
// prettier-ignore
export const HexTypeModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: z.string(),
    description: z.string(),
    landmarks: z.array(z.unknown()),
    HexCell: z.array(z.unknown())
}).strict();

export type HexTypePureType = z.infer<typeof HexTypeModelSchema>;
