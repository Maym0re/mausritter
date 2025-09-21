import { z } from 'zod';
import { MapImageUpdateManyMutationInputObjectSchema } from './objects/MapImageUpdateManyMutationInput.schema';
import { MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';

export const MapImageUpdateManySchema = z.object({ data: MapImageUpdateManyMutationInputObjectSchema, where: MapImageWhereInputObjectSchema.optional()  })