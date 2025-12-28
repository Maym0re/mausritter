import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereInputObjectSchema as DiceRollLogWhereInputObjectSchema } from './DiceRollLogWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogWhereInputObjectSchema).optional()
}).strict();
export const CampaignCountOutputTypeCountDiceRollsArgsObjectSchema = makeSchema();
export const CampaignCountOutputTypeCountDiceRollsArgsObjectZodSchema = makeSchema();
