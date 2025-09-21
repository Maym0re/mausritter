import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CampaignUpdateOneRequiredWithoutDiceRollsNestedInputObjectSchema } from './CampaignUpdateOneRequiredWithoutDiceRollsNestedInput.schema';
import { UserUpdateOneRequiredWithoutDiceRollLogsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDiceRollLogsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  notation: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  total: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  campaign: z.lazy(() => CampaignUpdateOneRequiredWithoutDiceRollsNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutDiceRollLogsNestedInputObjectSchema).optional()
}).strict();
export const DiceRollLogUpdateWithoutEntriesInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpdateWithoutEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpdateWithoutEntriesInput>;
export const DiceRollLogUpdateWithoutEntriesInputObjectZodSchema = makeSchema();
