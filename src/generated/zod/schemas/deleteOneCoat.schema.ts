import { z } from 'zod';
import { CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';

export const CoatDeleteOneSchema = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), where: CoatWhereUniqueInputObjectSchema  })