import { z } from 'zod';
import { LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkUpdateManyMutationInputObjectSchema } from './objects/LandmarkUpdateManyMutationInput.schema';
import { LandmarkWhereInputObjectSchema } from './objects/LandmarkWhereInput.schema';

export const LandmarkUpdateManyAndReturnSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), data: LandmarkUpdateManyMutationInputObjectSchema, where: LandmarkWhereInputObjectSchema.optional()  }).strict()