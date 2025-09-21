import { z } from 'zod';
import { MapMarkerCreateManyInputObjectSchema } from './objects/MapMarkerCreateManyInput.schema';

export const MapMarkerCreateManySchema = z.object({ data: z.union([ MapMarkerCreateManyInputObjectSchema, z.array(MapMarkerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })