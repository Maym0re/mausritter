import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
  ownedCampaigns: z.boolean().optional(),
  characters: z.boolean().optional(),
  playerIn: z.boolean().optional(),
  diceRollLogs: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
