import { z } from 'zod';
import { MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';

export const MapMarkerDeleteManySchema = z.object({ where: MapMarkerWhereInputObjectSchema.optional()  })