import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonalEventSelectObjectSchema as SeasonalEventSelectObjectSchema } from './SeasonalEventSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SeasonalEventSelectObjectSchema).optional()
}).strict();
export const SeasonalEventArgsObjectSchema = makeSchema();
export const SeasonalEventArgsObjectZodSchema = makeSchema();
