import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { UserCreateNestedOneWithoutOwnedCampaignsInputObjectSchema } from './UserCreateNestedOneWithoutOwnedCampaignsInput.schema';
import { CampaignPlayerCreateNestedManyWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateNestedManyWithoutCampaignInput.schema';
import { CharacterCreateNestedManyWithoutCampaignInputObjectSchema } from './CharacterCreateNestedManyWithoutCampaignInput.schema';
import { GameTimeCreateNestedOneWithoutCampaignInputObjectSchema } from './GameTimeCreateNestedOneWithoutCampaignInput.schema';
import { WeatherEntryCreateNestedOneWithoutCampaignInputObjectSchema } from './WeatherEntryCreateNestedOneWithoutCampaignInput.schema';
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
  players: z.lazy(() => CampaignPlayerCreateNestedManyWithoutCampaignInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutCampaignInputObjectSchema).optional(),
  gameTime: z.lazy(() => GameTimeCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  weatherEntry: z.lazy(() => WeatherEntryCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  diceRolls: z.lazy(() => DiceRollLogCreateNestedManyWithoutCampaignInputObjectSchema).optional()
}).strict();
export const CampaignCreateWithoutHexMapInputObjectSchema: z.ZodType<Prisma.CampaignCreateWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateWithoutHexMapInput>;
export const CampaignCreateWithoutHexMapInputObjectZodSchema = makeSchema();
