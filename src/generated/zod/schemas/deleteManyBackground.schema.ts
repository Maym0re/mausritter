import { z } from 'zod';
import { BackgroundWhereInputObjectSchema } from './objects/BackgroundWhereInput.schema';

export const BackgroundDeleteManySchema = z.object({ where: BackgroundWhereInputObjectSchema.optional()  })