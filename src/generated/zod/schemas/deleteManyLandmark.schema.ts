import { z } from 'zod';
import { LandmarkWhereInputObjectSchema } from './objects/LandmarkWhereInput.schema';

export const LandmarkDeleteManySchema = z.object({ where: LandmarkWhereInputObjectSchema.optional()  })