import { z } from 'zod';

// prettier-ignore
export const MapMarkerResultSchema = z.object({
    id: z.string(),
    hexMapId: z.string(),
    hexMap: z.unknown(),
    image: z.string(),
    x: z.number(),
    y: z.number(),
    z: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MapMarkerResultType = z.infer<typeof MapMarkerResultSchema>;
