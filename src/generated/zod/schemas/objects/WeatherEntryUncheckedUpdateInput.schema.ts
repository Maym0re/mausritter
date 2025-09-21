import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { EnumSeasonNameFieldUpdateOperationsInputObjectSchema } from './EnumSeasonNameFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { CampaignUncheckedUpdateManyWithoutWeatherEntryNestedInputObjectSchema } from './CampaignUncheckedUpdateManyWithoutWeatherEntryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  season: z.union([SeasonNameSchema, z.lazy(() => EnumSeasonNameFieldUpdateOperationsInputObjectSchema)]).optional(),
  roll: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  weather: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPoorCondition: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  Campaign: z.lazy(() => CampaignUncheckedUpdateManyWithoutWeatherEntryNestedInputObjectSchema).optional()
}).strict();
export const WeatherEntryUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.WeatherEntryUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryUncheckedUpdateInput>;
export const WeatherEntryUncheckedUpdateInputObjectZodSchema = makeSchema();
