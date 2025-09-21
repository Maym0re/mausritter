import { z } from 'zod';
import { LandmarkDetailUpdateManyMutationInputObjectSchema } from './objects/LandmarkDetailUpdateManyMutationInput.schema';
import { LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';

export const LandmarkDetailUpdateManySchema = z.object({ data: LandmarkDetailUpdateManyMutationInputObjectSchema, where: LandmarkDetailWhereInputObjectSchema.optional()  })