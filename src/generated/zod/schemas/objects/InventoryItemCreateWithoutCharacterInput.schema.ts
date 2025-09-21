import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SlotTypeSchema } from '../enums/SlotType.schema'

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
  updatedAt: z.coerce.date().optional()
}).strict();
export const InventoryItemCreateWithoutCharacterInputObjectSchema: z.ZodType<Prisma.InventoryItemCreateWithoutCharacterInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemCreateWithoutCharacterInput>;
export const InventoryItemCreateWithoutCharacterInputObjectZodSchema = makeSchema();
