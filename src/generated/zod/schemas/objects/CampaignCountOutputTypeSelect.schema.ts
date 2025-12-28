import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCountOutputTypeCountPlayersArgsObjectSchema as CampaignCountOutputTypeCountPlayersArgsObjectSchema } from './CampaignCountOutputTypeCountPlayersArgs.schema';
import { CampaignCountOutputTypeCountCharactersArgsObjectSchema as CampaignCountOutputTypeCountCharactersArgsObjectSchema } from './CampaignCountOutputTypeCountCharactersArgs.schema';
import { CampaignCountOutputTypeCountDiceRollsArgsObjectSchema as CampaignCountOutputTypeCountDiceRollsArgsObjectSchema } from './CampaignCountOutputTypeCountDiceRollsArgs.schema'

const makeSchema = () => z.object({
  players: z.union([z.boolean(), z.lazy(() => CampaignCountOutputTypeCountPlayersArgsObjectSchema)]).optional(),
  characters: z.union([z.boolean(), z.lazy(() => CampaignCountOutputTypeCountCharactersArgsObjectSchema)]).optional(),
  diceRolls: z.union([z.boolean(), z.lazy(() => CampaignCountOutputTypeCountDiceRollsArgsObjectSchema)]).optional()
}).strict();
export const CampaignCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CampaignCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCountOutputTypeSelect>;
export const CampaignCountOutputTypeSelectObjectZodSchema = makeSchema();
