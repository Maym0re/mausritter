import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { CampaignPlayerFindManySchema } from '../findManyCampaignPlayer.schema';
import { CharacterFindManySchema } from '../findManyCharacter.schema';
import { GameTimeArgsObjectSchema } from './GameTimeArgs.schema';
import { WeatherEntryArgsObjectSchema } from './WeatherEntryArgs.schema';
import { HexMapArgsObjectSchema } from './HexMapArgs.schema';
import { DiceRollLogFindManySchema } from '../findManyDiceRollLog.schema';
import { CampaignCountOutputTypeArgsObjectSchema } from './CampaignCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  isActive: z.boolean().optional(),
  gmId: z.boolean().optional(),
  gm: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  players: z.union([z.boolean(), z.lazy(() => CampaignPlayerFindManySchema)]).optional(),
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  gameTime: z.union([z.boolean(), z.lazy(() => GameTimeArgsObjectSchema)]).optional(),
  season: z.boolean().optional(),
  weatherEntryId: z.boolean().optional(),
  weatherEntry: z.union([z.boolean(), z.lazy(() => WeatherEntryArgsObjectSchema)]).optional(),
  hexMap: z.union([z.boolean(), z.lazy(() => HexMapArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  todaysEvent: z.boolean().optional(),
  diceRolls: z.union([z.boolean(), z.lazy(() => DiceRollLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CampaignCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CampaignSelectObjectSchema: z.ZodType<Prisma.CampaignSelect> = makeSchema() as unknown as z.ZodType<Prisma.CampaignSelect>;
export const CampaignSelectObjectZodSchema = makeSchema();
