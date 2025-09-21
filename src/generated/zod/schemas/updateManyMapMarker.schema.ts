import { z } from 'zod';
import { MapMarkerUpdateManyMutationInputObjectSchema } from './objects/MapMarkerUpdateManyMutationInput.schema';
import { MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';

export const MapMarkerUpdateManySchema = z.object({ data: MapMarkerUpdateManyMutationInputObjectSchema, where: MapMarkerWhereInputObjectSchema.optional()  })