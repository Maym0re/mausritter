import { z } from 'zod';

// prettier-ignore
export const HexMapInputSchema = z.object({
    id: z.string(),
    campaignId: z.string(),
    campaign: z.unknown(),
    size: z.number().int(),
    centerX: z.number().int(),
    centerY: z.number().int(),
    cells: z.array(z.unknown()).array(),
    images: z.array(z.unknown()).array(),
    markers: z.array(z.unknown()).array(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type HexMapInputType = z.infer<typeof HexMapInputSchema>;
