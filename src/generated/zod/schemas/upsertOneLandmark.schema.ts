import { z } from 'zod';
import { LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';
import { LandmarkCreateInputObjectSchema } from './objects/LandmarkCreateInput.schema';
import { LandmarkUncheckedCreateInputObjectSchema } from './objects/LandmarkUncheckedCreateInput.schema';
import { LandmarkUpdateInputObjectSchema } from './objects/LandmarkUpdateInput.schema';
import { LandmarkUncheckedUpdateInputObjectSchema } from './objects/LandmarkUncheckedUpdateInput.schema';

export const LandmarkUpsertSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), where: LandmarkWhereUniqueInputObjectSchema, create: z.union([ LandmarkCreateInputObjectSchema, LandmarkUncheckedCreateInputObjectSchema ]), update: z.union([ LandmarkUpdateInputObjectSchema, LandmarkUncheckedUpdateInputObjectSchema ])  })