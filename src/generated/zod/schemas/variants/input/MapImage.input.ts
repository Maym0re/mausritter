import { z } from 'zod';

// prettier-ignore
export const MapImageInputSchema = z.object({
    id: z.string(),
    hexMapId: z.string(),
    hexMap: z.unknown(),
    data: z.string(),
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MapImageInputType = z.infer<typeof MapImageInputSchema>;
