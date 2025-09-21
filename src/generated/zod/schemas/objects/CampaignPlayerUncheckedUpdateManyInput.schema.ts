import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  campaignId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CampaignPlayerUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUncheckedUpdateManyInput>;
export const CampaignPlayerUncheckedUpdateManyInputObjectZodSchema = makeSchema();
