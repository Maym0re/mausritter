import { z } from 'zod';
import { LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailUpdateInputObjectSchema } from './objects/LandmarkDetailUpdateInput.schema';
import { LandmarkDetailUncheckedUpdateInputObjectSchema } from './objects/LandmarkDetailUncheckedUpdateInput.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';

export const LandmarkDetailUpdateOneSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), data: z.union([LandmarkDetailUpdateInputObjectSchema, LandmarkDetailUncheckedUpdateInputObjectSchema]), where: LandmarkDetailWhereUniqueInputObjectSchema  })