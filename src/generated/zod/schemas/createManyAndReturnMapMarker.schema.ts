import { z } from 'zod';
import { MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerCreateManyInputObjectSchema } from './objects/MapMarkerCreateManyInput.schema';

export const MapMarkerCreateManyAndReturnSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), data: z.union([ MapMarkerCreateManyInputObjectSchema, z.array(MapMarkerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()