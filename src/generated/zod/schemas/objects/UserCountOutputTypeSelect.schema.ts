import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountOwnedCampaignsArgsObjectSchema as UserCountOutputTypeCountOwnedCampaignsArgsObjectSchema } from './UserCountOutputTypeCountOwnedCampaignsArgs.schema';
import { UserCountOutputTypeCountCharactersArgsObjectSchema as UserCountOutputTypeCountCharactersArgsObjectSchema } from './UserCountOutputTypeCountCharactersArgs.schema';
import { UserCountOutputTypeCountPlayerInArgsObjectSchema as UserCountOutputTypeCountPlayerInArgsObjectSchema } from './UserCountOutputTypeCountPlayerInArgs.schema';
import { UserCountOutputTypeCountDiceRollLogsArgsObjectSchema as UserCountOutputTypeCountDiceRollLogsArgsObjectSchema } from './UserCountOutputTypeCountDiceRollLogsArgs.schema'

const makeSchema = () => z.object({
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  ownedCampaigns: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOwnedCampaignsArgsObjectSchema)]).optional(),
  characters: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountCharactersArgsObjectSchema)]).optional(),
  playerIn: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPlayerInArgsObjectSchema)]).optional(),
  diceRollLogs: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountDiceRollLogsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
