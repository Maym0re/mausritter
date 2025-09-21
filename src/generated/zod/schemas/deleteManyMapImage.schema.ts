import { z } from 'zod';
import { MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';

export const MapImageDeleteManySchema = z.object({ where: MapImageWhereInputObjectSchema.optional()  })