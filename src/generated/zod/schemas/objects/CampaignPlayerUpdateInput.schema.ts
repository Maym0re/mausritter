import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CampaignUpdateOneRequiredWithoutPlayersNestedInputObjectSchema } from './CampaignUpdateOneRequiredWithoutPlayersNestedInput.schema';
import { UserUpdateOneRequiredWithoutPlayerInNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPlayerInNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  campaign: z.lazy(() => CampaignUpdateOneRequiredWithoutPlayersNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPlayerInNestedInputObjectSchema).optional()
}).strict();
export const CampaignPlayerUpdateInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateInput>;
export const CampaignPlayerUpdateInputObjectZodSchema = makeSchema();
