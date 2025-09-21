import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  players: z.boolean().optional(),
  characters: z.boolean().optional(),
  diceRolls: z.boolean().optional()
}).strict();
export const CampaignCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CampaignCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCountOutputTypeSelect>;
export const CampaignCountOutputTypeSelectObjectZodSchema = makeSchema();
