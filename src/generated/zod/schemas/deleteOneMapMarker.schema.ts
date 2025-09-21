import { z } from 'zod';
import { MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';

export const MapMarkerDeleteOneSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), where: MapMarkerWhereUniqueInputObjectSchema  })