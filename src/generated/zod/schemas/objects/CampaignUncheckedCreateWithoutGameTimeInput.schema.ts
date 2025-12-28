import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectSchema as CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInput.schema';
import { CharacterUncheckedCreateNestedManyWithoutCampaignInputObjectSchema as CharacterUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutCampaignInput.schema';
import { HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema as HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema } from './HexMapUncheckedCreateNestedOneWithoutCampaignInput.schema';
import { DiceRollLogUncheckedCreateNestedManyWithoutCampaignInputObjectSchema as DiceRollLogUncheckedCreateNestedManyWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedCreateNestedManyWithoutCampaignInput.schema'

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
  hexMap: z.lazy(() => HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema).optional(),
  diceRolls: z.lazy(() => DiceRollLogUncheckedCreateNestedManyWithoutCampaignInputObjectSchema).optional()
}).strict();
export const CampaignUncheckedCreateWithoutGameTimeInputObjectSchema: z.ZodType<Prisma.CampaignUncheckedCreateWithoutGameTimeInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUncheckedCreateWithoutGameTimeInput>;
export const CampaignUncheckedCreateWithoutGameTimeInputObjectZodSchema = makeSchema();
