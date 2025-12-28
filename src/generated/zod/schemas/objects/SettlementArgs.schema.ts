import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementSelectObjectSchema as SettlementSelectObjectSchema } from './SettlementSelect.schema';
import { SettlementIncludeObjectSchema as SettlementIncludeObjectSchema } from './SettlementInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SettlementSelectObjectSchema).optional(),
  include: z.lazy(() => SettlementIncludeObjectSchema).optional()
}).strict();
export const SettlementArgsObjectSchema = makeSchema();
export const SettlementArgsObjectZodSchema = makeSchema();
