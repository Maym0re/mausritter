import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { UserCreateNestedOneWithoutOwnedCampaignsInputObjectSchema as UserCreateNestedOneWithoutOwnedCampaignsInputObjectSchema } from './UserCreateNestedOneWithoutOwnedCampaignsInput.schema';
import { CampaignPlayerCreateNestedManyWithoutCampaignInputObjectSchema as CampaignPlayerCreateNestedManyWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateNestedManyWithoutCampaignInput.schema';
import { GameTimeCreateNestedOneWithoutCampaignInputObjectSchema as GameTimeCreateNestedOneWithoutCampaignInputObjectSchema } from './GameTimeCreateNestedOneWithoutCampaignInput.schema';
import { WeatherEntryCreateNestedOneWithoutCampaignInputObjectSchema as WeatherEntryCreateNestedOneWithoutCampaignInputObjectSchema } from './WeatherEntryCreateNestedOneWithoutCampaignInput.schema';
import { HexMapCreateNestedOneWithoutCampaignInputObjectSchema as HexMapCreateNestedOneWithoutCampaignInputObjectSchema } from './HexMapCreateNestedOneWithoutCampaignInput.schema';
import { DiceRollLogCreateNestedManyWithoutCampaignInputObjectSchema as DiceRollLogCreateNestedManyWithoutCampaignInputObjectSchema } from './DiceRollLogCreateNestedManyWithoutCampaignInput.schema'

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
  gameTime: z.lazy(() => GameTimeCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  weatherEntry: z.lazy(() => WeatherEntryCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  hexMap: z.lazy(() => HexMapCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  diceRolls: z.lazy(() => DiceRollLogCreateNestedManyWithoutCampaignInputObjectSchema).optional()
}).strict();
export const CampaignCreateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CampaignCreateWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateWithoutCharactersInput>;
export const CampaignCreateWithoutCharactersInputObjectZodSchema = makeSchema();
