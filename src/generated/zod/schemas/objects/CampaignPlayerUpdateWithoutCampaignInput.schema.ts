import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPlayerInNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPlayerInNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPlayerInNestedInputObjectSchema).optional()
}).strict();
export const CampaignPlayerUpdateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpdateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateWithoutCampaignInput>;
export const CampaignPlayerUpdateWithoutCampaignInputObjectZodSchema = makeSchema();
