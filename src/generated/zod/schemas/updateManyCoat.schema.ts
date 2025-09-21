import { z } from 'zod';
import { CoatUpdateManyMutationInputObjectSchema } from './objects/CoatUpdateManyMutationInput.schema';
import { CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';

export const CoatUpdateManySchema = z.object({ data: CoatUpdateManyMutationInputObjectSchema, where: CoatWhereInputObjectSchema.optional()  })