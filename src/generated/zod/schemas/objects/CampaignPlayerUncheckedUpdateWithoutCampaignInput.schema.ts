import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CampaignPlayerUncheckedUpdateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUncheckedUpdateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUncheckedUpdateWithoutCampaignInput>;
export const CampaignPlayerUncheckedUpdateWithoutCampaignInputObjectZodSchema = makeSchema();
