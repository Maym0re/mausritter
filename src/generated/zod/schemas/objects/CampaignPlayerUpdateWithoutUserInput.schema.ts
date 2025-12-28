import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CampaignUpdateOneRequiredWithoutPlayersNestedInputObjectSchema as CampaignUpdateOneRequiredWithoutPlayersNestedInputObjectSchema } from './CampaignUpdateOneRequiredWithoutPlayersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  campaign: z.lazy(() => CampaignUpdateOneRequiredWithoutPlayersNestedInputObjectSchema).optional()
}).strict();
export const CampaignPlayerUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateWithoutUserInput>;
export const CampaignPlayerUpdateWithoutUserInputObjectZodSchema = makeSchema();
