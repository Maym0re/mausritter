import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemCharacterIdSlotTypeSlotIndexCompoundUniqueInputObjectSchema as InventoryItemCharacterIdSlotTypeSlotIndexCompoundUniqueInputObjectSchema } from './InventoryItemCharacterIdSlotTypeSlotIndexCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  characterId_slotType_slotIndex: z.lazy(() => InventoryItemCharacterIdSlotTypeSlotIndexCompoundUniqueInputObjectSchema).optional()
}).strict();
export const InventoryItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.InventoryItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemWhereUniqueInput>;
export const InventoryItemWhereUniqueInputObjectZodSchema = makeSchema();
