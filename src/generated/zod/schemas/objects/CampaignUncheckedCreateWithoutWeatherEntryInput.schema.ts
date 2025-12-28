import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectSchema as CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInput.schema';
import { CharacterUncheckedCreateNestedManyWithoutCampaignInputObjectSchema as CharacterUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutCampaignInput.schema';
import { GameTimeUncheckedCreateNestedOneWithoutCampaignInputObjectSchema as GameTimeUncheckedCreateNestedOneWithoutCampaignInputObjectSchema } from './GameTimeUncheckedCreateNestedOneWithoutCampaignInput.schema';
import { HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema as HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema } from './HexMapUncheckedCreateNestedOneWithoutCampaignInput.schema';
import { DiceRollLogUncheckedCreateNestedManyWithoutCampaignInputObjectSchema as DiceRollLogUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedCreateNestedManyWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  gmId: z.string(),
  season: SeasonNameSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  todaysEvent: z.string().optional().nullable(),
  players: z.lazy(() => CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutCampaignInputObjectSchema).optional(),
  gameTime: z.lazy(() => GameTimeUncheckedCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  hexMap: z.lazy(() => HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  diceRolls: z.lazy(() => DiceRollLogUncheckedCreateNestedManyWithoutCampaignInputObjectSchema).optional()
}).strict();
export const CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema: z.ZodType<Prisma.CampaignUncheckedCreateWithoutWeatherEntryInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUncheckedCreateWithoutWeatherEntryInput>;
export const CampaignUncheckedCreateWithoutWeatherEntryInputObjectZodSchema = makeSchema();
