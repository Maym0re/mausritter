import { z } from 'zod';
import { LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailUpdateManyMutationInputObjectSchema } from './objects/LandmarkDetailUpdateManyMutationInput.schema';
import { LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';

export const LandmarkDetailUpdateManyAndReturnSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), data: LandmarkDetailUpdateManyMutationInputObjectSchema, where: LandmarkDetailWhereInputObjectSchema.optional()  }).strict()