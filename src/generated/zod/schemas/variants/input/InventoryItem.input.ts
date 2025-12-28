import * as z from 'zod';
import { SlotTypeSchema } from '../../enums/SlotType.schema';
// prettier-ignore
export const InventoryItemInputSchema = z.object({
    id: z.string(),
    characterId: z.string(),
    character: z.unknown(),
    name: z.string(),
    type: z.string(),
    size: z.number().int(),
    usage: z.number().int(),
    maxUsage: z.number().int(),
    description: z.string().optional().nullable(),
    value: z.number().int().optional().nullable(),
    slotType: SlotTypeSchema,
    slotIndex: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type InventoryItemInputType = z.infer<typeof InventoryItemInputSchema>;
