import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { CampaignFindManySchema as CampaignFindManySchema } from '../findManyCampaign.schema';
import { CharacterFindManySchema as CharacterFindManySchema } from '../findManyCharacter.schema';
import { CampaignPlayerFindManySchema as CampaignPlayerFindManySchema } from '../findManyCampaignPlayer.schema';
import { DiceRollLogFindManySchema as DiceRollLogFindManySchema } from '../findManyDiceRollLog.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  ownedCampaigns: z.union([z.boolean(), z.lazy(() => CampaignFindManySchema)]).optional(),
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  playerIn: z.union([z.boolean(), z.lazy(() => CampaignPlayerFindManySchema)]).optional(),
  diceRollLogs: z.union([z.boolean(), z.lazy(() => DiceRollLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
