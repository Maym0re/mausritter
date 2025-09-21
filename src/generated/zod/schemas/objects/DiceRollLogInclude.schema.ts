import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignArgsObjectSchema } from './CampaignArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { DiceRollEntryFindManySchema } from '../findManyDiceRollEntry.schema';
import { DiceRollLogCountOutputTypeArgsObjectSchema } from './DiceRollLogCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  entries: z.union([z.boolean(), z.lazy(() => DiceRollEntryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DiceRollLogCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DiceRollLogIncludeObjectSchema: z.ZodType<Prisma.DiceRollLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogInclude>;
export const DiceRollLogIncludeObjectZodSchema = makeSchema();
