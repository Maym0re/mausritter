import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { UserCreateNestedOneWithoutOwnedCampaignsInputObjectSchema } from './UserCreateNestedOneWithoutOwnedCampaignsInput.schema';
import { CharacterCreateNestedManyWithoutCampaignInputObjectSchema } from './CharacterCreateNestedManyWithoutCampaignInput.schema';
import { GameTimeCreateNestedOneWithoutCampaignInputObjectSchema } from './GameTimeCreateNestedOneWithoutCampaignInput.schema';
import { WeatherEntryCreateNestedOneWithoutCampaignInputObjectSchema } from './WeatherEntryCreateNestedOneWithoutCampaignInput.schema';
import { HexMapCreateNestedOneWithoutCampaignInputObjectSchema } from './HexMapCreateNestedOneWithoutCampaignInput.schema';
import { DiceRollLogCreateNestedManyWithoutCampaignInputObjectSchema } from './DiceRollLogCreateNestedManyWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  season: SeasonNameSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  todaysEvent: z.string().optional().nullable(),
  gm: z.lazy(() => UserCreateNestedOneWithoutOwnedCampaignsInputObjectSchema),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutCampaignInputObjectSchema).optional(),
  gameTime: z.lazy(() => GameTimeCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  weatherEntry: z.lazy(() => WeatherEntryCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  hexMap: z.lazy(() => HexMapCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  diceRolls: z.lazy(() => DiceRollLogCreateNestedManyWithoutCampaignInputObjectSchema).optional()
}).strict();
export const CampaignCreateWithoutPlayersInputObjectSchema: z.ZodType<Prisma.CampaignCreateWithoutPlayersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateWithoutPlayersInput>;
export const CampaignCreateWithoutPlayersInputObjectZodSchema = makeSchema();
