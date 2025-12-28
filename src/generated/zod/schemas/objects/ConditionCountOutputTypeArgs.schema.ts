import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionCountOutputTypeSelectObjectSchema as ConditionCountOutputTypeSelectObjectSchema } from './ConditionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ConditionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ConditionCountOutputTypeArgsObjectSchema = makeSchema();
export const ConditionCountOutputTypeArgsObjectZodSchema = makeSchema();
