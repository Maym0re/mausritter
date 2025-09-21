import { z } from 'zod';
import { MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerCreateInputObjectSchema } from './objects/MapMarkerCreateInput.schema';
import { MapMarkerUncheckedCreateInputObjectSchema } from './objects/MapMarkerUncheckedCreateInput.schema';

export const MapMarkerCreateOneSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), data: z.union([MapMarkerCreateInputObjectSchema, MapMarkerUncheckedCreateInputObjectSchema])  })