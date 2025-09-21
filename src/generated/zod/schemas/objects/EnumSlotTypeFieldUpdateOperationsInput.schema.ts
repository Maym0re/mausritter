import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SlotTypeSchema } from '../enums/SlotType.schema'

const makeSchema = () => z.object({
  set: SlotTypeSchema.optional()
}).strict();
export const EnumSlotTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSlotTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSlotTypeFieldUpdateOperationsInput>;
export const EnumSlotTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
