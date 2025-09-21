import { z } from 'zod';

export const SlotTypeSchema = z.enum(['PAWS', 'BODY', 'PACK'])

export type SlotType = z.infer<typeof SlotTypeSchema>;