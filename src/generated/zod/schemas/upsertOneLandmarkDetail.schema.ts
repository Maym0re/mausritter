import { z } from 'zod';
import { LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailCreateInputObjectSchema } from './objects/LandmarkDetailCreateInput.schema';
import { LandmarkDetailUncheckedCreateInputObjectSchema } from './objects/LandmarkDetailUncheckedCreateInput.schema';
import { LandmarkDetailUpdateInputObjectSchema } from './objects/LandmarkDetailUpdateInput.schema';
import { LandmarkDetailUncheckedUpdateInputObjectSchema } from './objects/LandmarkDetailUncheckedUpdateInput.schema';

export const LandmarkDetailUpsertSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), where: LandmarkDetailWhereUniqueInputObjectSchema, create: z.union([ LandmarkDetailCreateInputObjectSchema, LandmarkDetailUncheckedCreateInputObjectSchema ]), update: z.union([ LandmarkDetailUpdateInputObjectSchema, LandmarkDetailUncheckedUpdateInputObjectSchema ])  })