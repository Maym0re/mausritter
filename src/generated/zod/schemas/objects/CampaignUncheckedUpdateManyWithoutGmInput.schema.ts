import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { EnumSeasonNameFieldUpdateOperationsInputObjectSchema } from './EnumSeasonNameFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  season: z.union([SeasonNameSchema, z.lazy(() => EnumSeasonNameFieldUpdateOperationsInputObjectSchema)]).optional(),
  weatherEntryId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  todaysEvent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const CampaignUncheckedUpdateManyWithoutGmInputObjectSchema: z.ZodType<Prisma.CampaignUncheckedUpdateManyWithoutGmInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUncheckedUpdateManyWithoutGmInput>;
export const CampaignUncheckedUpdateManyWithoutGmInputObjectZodSchema = makeSchema();
