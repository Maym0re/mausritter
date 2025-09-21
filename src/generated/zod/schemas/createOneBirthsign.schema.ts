import { z } from 'zod';
import { BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignIncludeObjectSchema } from './objects/BirthsignInclude.schema';
import { BirthsignCreateInputObjectSchema } from './objects/BirthsignCreateInput.schema';
import { BirthsignUncheckedCreateInputObjectSchema } from './objects/BirthsignUncheckedCreateInput.schema';

export const BirthsignCreateOneSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), data: z.union([BirthsignCreateInputObjectSchema, BirthsignUncheckedCreateInputObjectSchema])  })