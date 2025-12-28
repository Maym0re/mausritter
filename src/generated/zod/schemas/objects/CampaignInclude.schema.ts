import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { CampaignPlayerFindManySchema as CampaignPlayerFindManySchema } from '../findManyCampaignPlayer.schema';
import { CharacterFindManySchema as CharacterFindManySchema } from '../findManyCharacter.schema';
import { GameTimeArgsObjectSchema as GameTimeArgsObjectSchema } from './GameTimeArgs.schema';
import { WeatherEntryArgsObjectSchema as WeatherEntryArgsObjectSchema } from './WeatherEntryArgs.schema';
import { HexMapArgsObjectSchema as HexMapArgsObjectSchema } from './HexMapArgs.schema';
import { DiceRollLogFindManySchema as DiceRollLogFindManySchema } from '../findManyDiceRollLog.schema';
import { CampaignCountOutputTypeArgsObjectSchema as CampaignCountOutputTypeArgsObjectSchema } from './CampaignCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  gm: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  players: z.union([z.boolean(), z.lazy(() => CampaignPlayerFindManySchema)]).optional(),
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  gameTime: z.union([z.boolean(), z.lazy(() => GameTimeArgsObjectSchema)]).optional(),
  weatherEntry: z.union([z.boolean(), z.lazy(() => WeatherEntryArgsObjectSchema)]).optional(),
  hexMap: z.union([z.boolean(), z.lazy(() => HexMapArgsObjectSchema)]).optional(),
  diceRolls: z.union([z.boolean(), z.lazy(() => DiceRollLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CampaignCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CampaignIncludeObjectSchema: z.ZodType<Prisma.CampaignInclude> = makeSchema() as unknown as z.ZodType<Prisma.CampaignInclude>;
export const CampaignIncludeObjectZodSchema = makeSchema();
