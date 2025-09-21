import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInput.schema';
import { CharacterUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutCampaignInput.schema';
import { GameTimeUncheckedCreateNestedOneWithoutCampaignInputObjectSchema } from './GameTimeUncheckedCreateNestedOneWithoutCampaignInput.schema';
import { HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema } from './HexMapUncheckedCreateNestedOneWithoutCampaignInput.schema';
import { DiceRollLogUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedCreateNestedManyWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  gmId: z.string(),
  season: SeasonNameSchema.optional(),
  weatherEntryId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  todaysEvent: z.string().optional().nullable(),
  players: z.lazy(() => CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectSchema),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutCampaignInputObjectSchema),
  gameTime: z.lazy(() => GameTimeUncheckedCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  hexMap: z.lazy(() => HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  diceRolls: z.lazy(() => DiceRollLogUncheckedCreateNestedManyWithoutCampaignInputObjectSchema)
}).strict();
export const CampaignUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CampaignUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUncheckedCreateInput>;
export const CampaignUncheckedCreateInputObjectZodSchema = makeSchema();
