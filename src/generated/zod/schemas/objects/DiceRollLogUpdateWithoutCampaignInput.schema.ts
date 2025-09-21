import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutDiceRollLogsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDiceRollLogsNestedInput.schema';
import { DiceRollEntryUpdateManyWithoutLogNestedInputObjectSchema } from './DiceRollEntryUpdateManyWithoutLogNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  notation: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  total: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutDiceRollLogsNestedInputObjectSchema).optional(),
  entries: z.lazy(() => DiceRollEntryUpdateManyWithoutLogNestedInputObjectSchema).optional()
}).strict();
export const DiceRollLogUpdateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpdateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpdateWithoutCampaignInput>;
export const DiceRollLogUpdateWithoutCampaignInputObjectZodSchema = makeSchema();
