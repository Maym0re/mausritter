import { z } from 'zod';
import { BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignIncludeObjectSchema } from './objects/BirthsignInclude.schema';
import { BirthsignUpdateInputObjectSchema } from './objects/BirthsignUpdateInput.schema';
import { BirthsignUncheckedUpdateInputObjectSchema } from './objects/BirthsignUncheckedUpdateInput.schema';
import { BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';

export const BirthsignUpdateOneSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), data: z.union([BirthsignUpdateInputObjectSchema, BirthsignUncheckedUpdateInputObjectSchema]), where: BirthsignWhereUniqueInputObjectSchema  })