import { z } from 'zod';
import { BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignIncludeObjectSchema } from './objects/BirthsignInclude.schema';
import { BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';
import { BirthsignCreateInputObjectSchema } from './objects/BirthsignCreateInput.schema';
import { BirthsignUncheckedCreateInputObjectSchema } from './objects/BirthsignUncheckedCreateInput.schema';
import { BirthsignUpdateInputObjectSchema } from './objects/BirthsignUpdateInput.schema';
import { BirthsignUncheckedUpdateInputObjectSchema } from './objects/BirthsignUncheckedUpdateInput.schema';

export const BirthsignUpsertSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), where: BirthsignWhereUniqueInputObjectSchema, create: z.union([ BirthsignCreateInputObjectSchema, BirthsignUncheckedCreateInputObjectSchema ]), update: z.union([ BirthsignUpdateInputObjectSchema, BirthsignUncheckedUpdateInputObjectSchema ])  })