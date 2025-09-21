import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DiceRollLogUpdateOneRequiredWithoutEntriesNestedInputObjectSchema } from './DiceRollLogUpdateOneRequiredWithoutEntriesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  sides: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  log: z.lazy(() => DiceRollLogUpdateOneRequiredWithoutEntriesNestedInputObjectSchema).optional()
}).strict();
export const DiceRollEntryUpdateInputObjectSchema: z.ZodType<Prisma.DiceRollEntryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryUpdateInput>;
export const DiceRollEntryUpdateInputObjectZodSchema = makeSchema();
