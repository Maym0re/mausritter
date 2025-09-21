import { z } from 'zod';
import { LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';

export const LandmarkDeleteOneSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), where: LandmarkWhereUniqueInputObjectSchema  })