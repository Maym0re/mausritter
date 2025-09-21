import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { EnumSeasonNameFieldUpdateOperationsInputObjectSchema } from './EnumSeasonNameFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  season: z.union([SeasonNameSchema, z.lazy(() => EnumSeasonNameFieldUpdateOperationsInputObjectSchema)]).optional(),
  roll: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  weather: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPoorCondition: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WeatherEntryUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.WeatherEntryUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryUncheckedUpdateManyInput>;
export const WeatherEntryUncheckedUpdateManyInputObjectZodSchema = makeSchema();
