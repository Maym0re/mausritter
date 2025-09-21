import { z } from 'zod';
import { LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkUpdateInputObjectSchema } from './objects/LandmarkUpdateInput.schema';
import { LandmarkUncheckedUpdateInputObjectSchema } from './objects/LandmarkUncheckedUpdateInput.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';

export const LandmarkUpdateOneSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), data: z.union([LandmarkUpdateInputObjectSchema, LandmarkUncheckedUpdateInputObjectSchema]), where: LandmarkWhereUniqueInputObjectSchema  })