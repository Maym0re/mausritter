import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInput.schema';
import { CharacterUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutCampaignInput.schema';
import { GameTimeUncheckedCreateNestedOneWithoutCampaignInputObjectSchema } from './GameTimeUncheckedCreateNestedOneWithoutCampaignInput.schema';
import { HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema } from './HexMapUncheckedCreateNestedOneWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  gmId: z.string(),
  season: SeasonNameSchema.optional(),
  weatherEntryId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  todaysEvent: z.string().optional().nullable(),
  players: z.lazy(() => CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutCampaignInputObjectSchema).optional(),
  gameTime: z.lazy(() => GameTimeUncheckedCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  hexMap: z.lazy(() => HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema).optional()
}).strict();
export const CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema: z.ZodType<Prisma.CampaignUncheckedCreateWithoutDiceRollsInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUncheckedCreateWithoutDiceRollsInput>;
export const CampaignUncheckedCreateWithoutDiceRollsInputObjectZodSchema = makeSchema();
