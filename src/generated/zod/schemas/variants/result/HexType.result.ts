import * as z from 'zod';
// prettier-ignore
export const HexTypeResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: z.string(),
    description: z.string(),
    landmarks: z.array(z.unknown()),
    HexCell: z.array(z.unknown())
}).strict();

export type HexTypeResultType = z.infer<typeof HexTypeResultSchema>;
