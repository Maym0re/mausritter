import { z } from 'zod';
import { CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatUpdateManyMutationInputObjectSchema } from './objects/CoatUpdateManyMutationInput.schema';
import { CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';

export const CoatUpdateManyAndReturnSchema = z.object({ select: CoatSelectObjectSchema.optional(), data: CoatUpdateManyMutationInputObjectSchema, where: CoatWhereInputObjectSchema.optional()  }).strict()