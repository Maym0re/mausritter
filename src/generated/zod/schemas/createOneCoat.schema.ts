import { z } from 'zod';
import { CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatCreateInputObjectSchema } from './objects/CoatCreateInput.schema';
import { CoatUncheckedCreateInputObjectSchema } from './objects/CoatUncheckedCreateInput.schema';

export const CoatCreateOneSchema = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), data: z.union([CoatCreateInputObjectSchema, CoatUncheckedCreateInputObjectSchema])  })