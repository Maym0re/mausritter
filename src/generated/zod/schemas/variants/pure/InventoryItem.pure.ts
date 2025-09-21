import { z } from 'zod';

import { SlotTypeSchema } from '../../enums/SlotType.schema';
// prettier-ignore
export const InventoryItemModelSchema = z.object({
    id: z.string(),
    characterId: z.string(),
    character: z.unknown(),
    name: z.string(),
    type: z.string(),
    size: z.number().int(),
    usage: z.number().int(),
    maxUsage: z.number().int(),
    description: z.string().nullable(),
    value: z.number().int().nullable(),
    slotType: SlotTypeSchema,
    slotIndex: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type InventoryItemModelType = z.infer<typeof InventoryItemModelSchema>;
