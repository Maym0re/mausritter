import { z } from 'zod';
import { LandmarkDetailCreateManyInputObjectSchema } from './objects/LandmarkDetailCreateManyInput.schema';

export const LandmarkDetailCreateManySchema = z.object({ data: z.union([ LandmarkDetailCreateManyInputObjectSchema, z.array(LandmarkDetailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })