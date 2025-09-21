import { z } from 'zod';
import { MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerUpdateManyMutationInputObjectSchema } from './objects/MapMarkerUpdateManyMutationInput.schema';
import { MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';

export const MapMarkerUpdateManyAndReturnSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), data: MapMarkerUpdateManyMutationInputObjectSchema, where: MapMarkerWhereInputObjectSchema.optional()  }).strict()