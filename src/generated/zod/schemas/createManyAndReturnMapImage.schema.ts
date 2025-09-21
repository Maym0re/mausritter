import { z } from 'zod';
import { MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageCreateManyInputObjectSchema } from './objects/MapImageCreateManyInput.schema';

export const MapImageCreateManyAndReturnSchema = z.object({ select: MapImageSelectObjectSchema.optional(), data: z.union([ MapImageCreateManyInputObjectSchema, z.array(MapImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()