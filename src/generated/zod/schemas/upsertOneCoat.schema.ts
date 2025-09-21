import { z } from 'zod';
import { CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';
import { CoatCreateInputObjectSchema } from './objects/CoatCreateInput.schema';
import { CoatUncheckedCreateInputObjectSchema } from './objects/CoatUncheckedCreateInput.schema';
import { CoatUpdateInputObjectSchema } from './objects/CoatUpdateInput.schema';
import { CoatUncheckedUpdateInputObjectSchema } from './objects/CoatUncheckedUpdateInput.schema';

export const CoatUpsertSchema = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), where: CoatWhereUniqueInputObjectSchema, create: z.union([ CoatCreateInputObjectSchema, CoatUncheckedCreateInputObjectSchema ]), update: z.union([ CoatUpdateInputObjectSchema, CoatUncheckedUpdateInputObjectSchema ])  })