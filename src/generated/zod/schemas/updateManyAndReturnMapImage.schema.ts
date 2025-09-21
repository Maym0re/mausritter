import { z } from 'zod';
import { MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageUpdateManyMutationInputObjectSchema } from './objects/MapImageUpdateManyMutationInput.schema';
import { MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';

export const MapImageUpdateManyAndReturnSchema = z.object({ select: MapImageSelectObjectSchema.optional(), data: MapImageUpdateManyMutationInputObjectSchema, where: MapImageWhereInputObjectSchema.optional()  }).strict()