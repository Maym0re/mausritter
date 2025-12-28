import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DiceRollEntryUncheckedUpdateManyWithoutLogNestedInputObjectSchema as DiceRollEntryUncheckedUpdateManyWithoutLogNestedInputObjectSchema } from './DiceRollEntryUncheckedUpdateManyWithoutLogNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  notation: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  total: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  entries: z.lazy(() => DiceRollEntryUncheckedUpdateManyWithoutLogNestedInputObjectSchema).optional()
}).strict();
export const DiceRollLogUncheckedUpdateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogUncheckedUpdateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUncheckedUpdateWithoutCampaignInput>;
export const DiceRollLogUncheckedUpdateWithoutCampaignInputObjectZodSchema = makeSchema();
