import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CampaignPlayerUncheckedUpdateManyWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUncheckedUpdateManyWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUncheckedUpdateManyWithoutCampaignInput>;
export const CampaignPlayerUncheckedUpdateManyWithoutCampaignInputObjectZodSchema = makeSchema();
