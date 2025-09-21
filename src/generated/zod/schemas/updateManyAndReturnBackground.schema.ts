import { z } from 'zod';
import { BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundUpdateManyMutationInputObjectSchema } from './objects/BackgroundUpdateManyMutationInput.schema';
import { BackgroundWhereInputObjectSchema } from './objects/BackgroundWhereInput.schema';

export const BackgroundUpdateManyAndReturnSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), data: BackgroundUpdateManyMutationInputObjectSchema, where: BackgroundWhereInputObjectSchema.optional()  }).strict()