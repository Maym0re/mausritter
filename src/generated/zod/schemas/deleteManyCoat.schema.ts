import { z } from 'zod';
import { CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';

export const CoatDeleteManySchema = z.object({ where: CoatWhereInputObjectSchema.optional()  })