import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SlotTypeSchema } from '../enums/SlotType.schema';
import { CharacterCreateNestedOneWithoutInventoryInputObjectSchema as CharacterCreateNestedOneWithoutInventoryInputObjectSchema } from './CharacterCreateNestedOneWithoutInventoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.string(),
  size: z.number().int(),
  usage: z.number().int().optional(),
  maxUsage: z.number().int(),
  description: z.string().optional().nullable(),
  value: z.number().int().optional().nullable(),
  slotType: SlotTypeSchema,
  slotIndex: z.number().int(),
  createdAt: z.coerce.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutInventoryInputObjectSchema)
}).strict();
export const InventoryItemCreateInputObjectSchema: z.ZodType<Prisma.InventoryItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemCreateInput>;
export const InventoryItemCreateInputObjectZodSchema = makeSchema();
