import { z } from 'zod';
import { LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkCreateManyInputObjectSchema } from './objects/LandmarkCreateManyInput.schema';

export const LandmarkCreateManyAndReturnSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), data: z.union([ LandmarkCreateManyInputObjectSchema, z.array(LandmarkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()