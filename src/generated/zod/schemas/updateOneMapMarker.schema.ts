import { z } from 'zod';
import { MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerUpdateInputObjectSchema } from './objects/MapMarkerUpdateInput.schema';
import { MapMarkerUncheckedUpdateInputObjectSchema } from './objects/MapMarkerUncheckedUpdateInput.schema';
import { MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';

export const MapMarkerUpdateOneSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), data: z.union([MapMarkerUpdateInputObjectSchema, MapMarkerUncheckedUpdateInputObjectSchema]), where: MapMarkerWhereUniqueInputObjectSchema  })