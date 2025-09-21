import { z } from 'zod';
import { BirthsignUpdateManyMutationInputObjectSchema } from './objects/BirthsignUpdateManyMutationInput.schema';
import { BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';

export const BirthsignUpdateManySchema = z.object({ data: BirthsignUpdateManyMutationInputObjectSchema, where: BirthsignWhereInputObjectSchema.optional()  })