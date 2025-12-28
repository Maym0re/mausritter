import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterArgsObjectSchema as CharacterArgsObjectSchema } from './CharacterArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  characterId: z.boolean().optional(),
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  size: z.boolean().optional(),
  usage: z.boolean().optional(),
  maxUsage: z.boolean().optional(),
  description: z.boolean().optional(),
  value: z.boolean().optional(),
  slotType: z.boolean().optional(),
  slotIndex: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const InventoryItemSelectObjectSchema: z.ZodType<Prisma.InventoryItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemSelect>;
export const InventoryItemSelectObjectZodSchema = makeSchema();
