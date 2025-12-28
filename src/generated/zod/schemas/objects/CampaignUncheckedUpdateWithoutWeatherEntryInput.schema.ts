import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { EnumSeasonNameFieldUpdateOperationsInputObjectSchema as EnumSeasonNameFieldUpdateOperationsInputObjectSchema } from './EnumSeasonNameFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CampaignPlayerUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema as CampaignPlayerUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema } from './CampaignPlayerUncheckedUpdateManyWithoutCampaignNestedInput.schema';
import { CharacterUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema as CharacterUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutCampaignNestedInput.schema';
import { GameTimeUncheckedUpdateOneWithoutCampaignNestedInputObjectSchema as GameTimeUncheckedUpdateOneWithoutCampaignNestedInputObjectSchema } from './GameTimeUncheckedUpdateOneWithoutCampaignNestedInput.schema';
import { HexMapUncheckedUpdateOneWithoutCampaignNestedInputObjectSchema as HexMapUncheckedUpdateOneWithoutCampaignNestedInputObjectSchema } from './HexMapUncheckedUpdateOneWithoutCampaignNestedInput.schema';
import { DiceRollLogUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema as DiceRollLogUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema } from './DiceRollLogUncheckedUpdateManyWithoutCampaignNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  gmId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  season: z.union([SeasonNameSchema, z.lazy(() => EnumSeasonNameFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  todaysEvent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  players: z.lazy(() => CampaignPlayerUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema).optional(),
  gameTime: z.lazy(() => GameTimeUncheckedUpdateOneWithoutCampaignNestedInputObjectSchema).optional(),
  hexMap: z.lazy(() => HexMapUncheckedUpdateOneWithoutCampaignNestedInputObjectSchema).optional(),
  diceRolls: z.lazy(() => DiceRollLogUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema).optional()
}).strict();
export const CampaignUncheckedUpdateWithoutWeatherEntryInputObjectSchema: z.ZodType<Prisma.CampaignUncheckedUpdateWithoutWeatherEntryInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUncheckedUpdateWithoutWeatherEntryInput>;
export const CampaignUncheckedUpdateWithoutWeatherEntryInputObjectZodSchema = makeSchema();
