import { z } from 'zod';
import { BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignUpdateManyMutationInputObjectSchema } from './objects/BirthsignUpdateManyMutationInput.schema';
import { BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';

export const BirthsignUpdateManyAndReturnSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), data: BirthsignUpdateManyMutationInputObjectSchema, where: BirthsignWhereInputObjectSchema.optional()  }).strict()