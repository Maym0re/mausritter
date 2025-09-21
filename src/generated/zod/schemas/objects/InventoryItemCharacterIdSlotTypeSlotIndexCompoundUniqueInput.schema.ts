import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SlotTypeSchema } from '../enums/SlotType.schema'

const makeSchema = () => z.object({
  characterId: z.string(),
  slotType: SlotTypeSchema,
  slotIndex: z.number().int()
}).strict();
export const InventoryItemCharacterIdSlotTypeSlotIndexCompoundUniqueInputObjectSchema: z.ZodType<Prisma.InventoryItemCharacterIdSlotTypeSlotIndexCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemCharacterIdSlotTypeSlotIndexCompoundUniqueInput>;
export const InventoryItemCharacterIdSlotTypeSlotIndexCompoundUniqueInputObjectZodSchema = makeSchema();
