import { z } from 'zod';
import { CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatUpdateInputObjectSchema } from './objects/CoatUpdateInput.schema';
import { CoatUncheckedUpdateInputObjectSchema } from './objects/CoatUncheckedUpdateInput.schema';
import { CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';

export const CoatUpdateOneSchema = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), data: z.union([CoatUpdateInputObjectSchema, CoatUncheckedUpdateInputObjectSchema]), where: CoatWhereUniqueInputObjectSchema  })