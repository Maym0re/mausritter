import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { EnumSeasonNameFieldUpdateOperationsInputObjectSchema } from './EnumSeasonNameFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { CampaignUpdateManyWithoutWeatherEntryNestedInputObjectSchema } from './CampaignUpdateManyWithoutWeatherEntryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  season: z.union([SeasonNameSchema, z.lazy(() => EnumSeasonNameFieldUpdateOperationsInputObjectSchema)]).optional(),
  roll: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  weather: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPoorCondition: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  Campaign: z.lazy(() => CampaignUpdateManyWithoutWeatherEntryNestedInputObjectSchema).optional()
}).strict();
export const WeatherEntryUpdateInputObjectSchema: z.ZodType<Prisma.WeatherEntryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryUpdateInput>;
export const WeatherEntryUpdateInputObjectZodSchema = makeSchema();
