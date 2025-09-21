import { z } from 'zod';
import { LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';

export const LandmarkDetailDeleteManySchema = z.object({ where: LandmarkDetailWhereInputObjectSchema.optional()  })