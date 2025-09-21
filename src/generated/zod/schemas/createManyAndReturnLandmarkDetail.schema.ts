import { z } from 'zod';
import { LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailCreateManyInputObjectSchema } from './objects/LandmarkDetailCreateManyInput.schema';

export const LandmarkDetailCreateManyAndReturnSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), data: z.union([ LandmarkDetailCreateManyInputObjectSchema, z.array(LandmarkDetailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()