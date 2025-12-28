import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionSelectObjectSchema as ConditionSelectObjectSchema } from './ConditionSelect.schema';
import { ConditionIncludeObjectSchema as ConditionIncludeObjectSchema } from './ConditionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ConditionSelectObjectSchema).optional(),
  include: z.lazy(() => ConditionIncludeObjectSchema).optional()
}).strict();
export const ConditionArgsObjectSchema = makeSchema();
export const ConditionArgsObjectZodSchema = makeSchema();
