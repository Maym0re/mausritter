import { z } from 'zod';
import { MapImageCreateManyInputObjectSchema } from './objects/MapImageCreateManyInput.schema';

export const MapImageCreateManySchema = z.object({ data: z.union([ MapImageCreateManyInputObjectSchema, z.array(MapImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })