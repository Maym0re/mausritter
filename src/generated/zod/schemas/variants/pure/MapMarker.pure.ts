import { z } from 'zod';

// prettier-ignore
export const MapMarkerModelSchema = z.object({
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

export type MapMarkerModelType = z.infer<typeof MapMarkerModelSchema>;
