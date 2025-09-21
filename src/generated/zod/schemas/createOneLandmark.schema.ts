import { z } from 'zod';
import { LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkCreateInputObjectSchema } from './objects/LandmarkCreateInput.schema';
import { LandmarkUncheckedCreateInputObjectSchema } from './objects/LandmarkUncheckedCreateInput.schema';

export const LandmarkCreateOneSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), data: z.union([LandmarkCreateInputObjectSchema, LandmarkUncheckedCreateInputObjectSchema])  })