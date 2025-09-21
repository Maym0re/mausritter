import { z } from 'zod';
import { LandmarkUpdateManyMutationInputObjectSchema } from './objects/LandmarkUpdateManyMutationInput.schema';
import { LandmarkWhereInputObjectSchema } from './objects/LandmarkWhereInput.schema';

export const LandmarkUpdateManySchema = z.object({ data: LandmarkUpdateManyMutationInputObjectSchema, where: LandmarkWhereInputObjectSchema.optional()  })