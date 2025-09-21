import { z } from 'zod';
import { LandmarkCreateManyInputObjectSchema } from './objects/LandmarkCreateManyInput.schema';

export const LandmarkCreateManySchema = z.object({ data: z.union([ LandmarkCreateManyInputObjectSchema, z.array(LandmarkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })