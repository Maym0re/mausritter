import { z } from 'zod';
import { LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailCreateInputObjectSchema } from './objects/LandmarkDetailCreateInput.schema';
import { LandmarkDetailUncheckedCreateInputObjectSchema } from './objects/LandmarkDetailUncheckedCreateInput.schema';

export const LandmarkDetailCreateOneSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), data: z.union([LandmarkDetailCreateInputObjectSchema, LandmarkDetailUncheckedCreateInputObjectSchema])  })