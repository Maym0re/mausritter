import { z } from 'zod';
import { ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';
import { ConditionCreateInputObjectSchema } from './objects/ConditionCreateInput.schema';
import { ConditionUncheckedCreateInputObjectSchema } from './objects/ConditionUncheckedCreateInput.schema';
import { ConditionUpdateInputObjectSchema } from './objects/ConditionUpdateInput.schema';
import { ConditionUncheckedUpdateInputObjectSchema } from './objects/ConditionUncheckedUpdateInput.schema';

export const ConditionUpsertSchema = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), where: ConditionWhereUniqueInputObjectSchema, create: z.union([ ConditionCreateInputObjectSchema, ConditionUncheckedCreateInputObjectSchema ]), update: z.union([ ConditionUpdateInputObjectSchema, ConditionUncheckedUpdateInputObjectSchema ])  })