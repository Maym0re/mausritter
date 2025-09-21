import { z } from 'zod';
import { BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';

export const BirthsignDeleteManySchema = z.object({ where: BirthsignWhereInputObjectSchema.optional()  })