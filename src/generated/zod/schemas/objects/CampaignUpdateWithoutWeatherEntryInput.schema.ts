import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { EnumSeasonNameFieldUpdateOperationsInputObjectSchema as EnumSeasonNameFieldUpdateOperationsInputObjectSchema } from './EnumSeasonNameFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutOwnedCampaignsNestedInputObjectSchema as UserUpdateOneRequiredWithoutOwnedCampaignsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutOwnedCampaignsNestedInput.schema';
import { CampaignPlayerUpdateManyWithoutCampaignNestedInputObjectSchema as CampaignPlayerUpdateManyWithoutCampaignNestedInputObjectSchema } from './CampaignPlayerUpdateManyWithoutCampaignNestedInput.schema';
import { CharacterUpdateManyWithoutCampaignNestedInputObjectSchema as CharacterUpdateManyWithoutCampaignNestedInputObjectSchema } from './CharacterUpdateManyWithoutCampaignNestedInput.schema';
import { GameTimeUpdateOneWithoutCampaignNestedInputObjectSchema as GameTimeUpdateOneWithoutCampaignNestedInputObjectSchema } from './GameTimeUpdateOneWithoutCampaignNestedInput.schema';
import { HexMapUpdateOneWithoutCampaignNestedInputObjectSchema as HexMapUpdateOneWithoutCampaignNestedInputObjectSchema } from './HexMapUpdateOneWithoutCampaignNestedInput.schema';
import { DiceRollLogUpdateManyWithoutCampaignNestedInputObjectSchema as DiceRollLogUpdateManyWithoutCampaignNestedInputObjectSchema } from './DiceRollLogUpdateManyWithoutCampaignNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  season: z.union([SeasonNameSchema, z.lazy(() => EnumSeasonNameFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  todaysEvent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  gm: z.lazy(() => UserUpdateOneRequiredWithoutOwnedCampaignsNestedInputObjectSchema).optional(),
  players: z.lazy(() => CampaignPlayerUpdateManyWithoutCampaignNestedInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterUpdateManyWithoutCampaignNestedInputObjectSchema).optional(),
  gameTime: z.lazy(() => GameTimeUpdateOneWithoutCampaignNestedInputObjectSchema).optional(),
  hexMap: z.lazy(() => HexMapUpdateOneWithoutCampaignNestedInputObjectSchema).optional(),
  diceRolls: z.lazy(() => DiceRollLogUpdateManyWithoutCampaignNestedInputObjectSchema).optional()
}).strict();
export const CampaignUpdateWithoutWeatherEntryInputObjectSchema: z.ZodType<Prisma.CampaignUpdateWithoutWeatherEntryInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateWithoutWeatherEntryInput>;
export const CampaignUpdateWithoutWeatherEntryInputObjectZodSchema = makeSchema();
