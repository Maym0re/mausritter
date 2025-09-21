import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { EnumSeasonNameFieldUpdateOperationsInputObjectSchema } from './EnumSeasonNameFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CampaignPlayerUpdateManyWithoutCampaignNestedInputObjectSchema } from './CampaignPlayerUpdateManyWithoutCampaignNestedInput.schema';
import { CharacterUpdateManyWithoutCampaignNestedInputObjectSchema } from './CharacterUpdateManyWithoutCampaignNestedInput.schema';
import { GameTimeUpdateOneWithoutCampaignNestedInputObjectSchema } from './GameTimeUpdateOneWithoutCampaignNestedInput.schema';
import { WeatherEntryUpdateOneWithoutCampaignNestedInputObjectSchema } from './WeatherEntryUpdateOneWithoutCampaignNestedInput.schema';
import { HexMapUpdateOneWithoutCampaignNestedInputObjectSchema } from './HexMapUpdateOneWithoutCampaignNestedInput.schema';
import { DiceRollLogUpdateManyWithoutCampaignNestedInputObjectSchema } from './DiceRollLogUpdateManyWithoutCampaignNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  season: z.union([SeasonNameSchema, z.lazy(() => EnumSeasonNameFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  todaysEvent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  players: z.lazy(() => CampaignPlayerUpdateManyWithoutCampaignNestedInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterUpdateManyWithoutCampaignNestedInputObjectSchema).optional(),
  gameTime: z.lazy(() => GameTimeUpdateOneWithoutCampaignNestedInputObjectSchema).optional(),
  weatherEntry: z.lazy(() => WeatherEntryUpdateOneWithoutCampaignNestedInputObjectSchema).optional(),
  hexMap: z.lazy(() => HexMapUpdateOneWithoutCampaignNestedInputObjectSchema).optional(),
  diceRolls: z.lazy(() => DiceRollLogUpdateManyWithoutCampaignNestedInputObjectSchema).optional()
}).strict();
export const CampaignUpdateWithoutGmInputObjectSchema: z.ZodType<Prisma.CampaignUpdateWithoutGmInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateWithoutGmInput>;
export const CampaignUpdateWithoutGmInputObjectZodSchema = makeSchema();
