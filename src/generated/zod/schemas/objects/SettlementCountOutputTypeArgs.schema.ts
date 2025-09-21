import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementCountOutputTypeSelectObjectSchema } from './SettlementCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SettlementCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SettlementCountOutputTypeArgsObjectSchema = makeSchema();
export const SettlementCountOutputTypeArgsObjectZodSchema = makeSchema();
