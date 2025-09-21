import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignArgsObjectSchema } from './CampaignArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { DiceRollEntryFindManySchema } from '../findManyDiceRollEntry.schema';
import { DiceRollLogCountOutputTypeArgsObjectSchema } from './DiceRollLogCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  campaignId: z.boolean().optional(),
  campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  notation: z.boolean().optional(),
  total: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => DiceRollEntryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DiceRollLogCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DiceRollLogSelectObjectSchema: z.ZodType<Prisma.DiceRollLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogSelect>;
export const DiceRollLogSelectObjectZodSchema = makeSchema();
