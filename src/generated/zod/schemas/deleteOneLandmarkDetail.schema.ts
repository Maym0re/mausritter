import { z } from 'zod';
import { LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';

export const LandmarkDetailDeleteOneSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), where: LandmarkDetailWhereUniqueInputObjectSchema  })