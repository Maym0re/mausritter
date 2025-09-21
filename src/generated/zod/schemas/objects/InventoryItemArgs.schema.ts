import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemSelectObjectSchema } from './InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema } from './InventoryItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => InventoryItemSelectObjectSchema).optional(),
  include: z.lazy(() => InventoryItemIncludeObjectSchema).optional()
}).strict();
export const InventoryItemArgsObjectSchema = makeSchema();
export const InventoryItemArgsObjectZodSchema = makeSchema();
