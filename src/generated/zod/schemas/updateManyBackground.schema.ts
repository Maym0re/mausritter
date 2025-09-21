import { z } from 'zod';
import { BackgroundUpdateManyMutationInputObjectSchema } from './objects/BackgroundUpdateManyMutationInput.schema';
import { BackgroundWhereInputObjectSchema } from './objects/BackgroundWhereInput.schema';

export const BackgroundUpdateManySchema = z.object({ data: BackgroundUpdateManyMutationInputObjectSchema, where: BackgroundWhereInputObjectSchema.optional()  })