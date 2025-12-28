import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignArgsObjectSchema as CampaignArgsObjectSchema } from './CampaignArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  campaignId: z.boolean().optional(),
  campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsObjectSchema)]).optional(),
  rounds: z.boolean().optional(),
  turns: z.boolean().optional(),
  watches: z.boolean().optional(),
  days: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const GameTimeSelectObjectSchema: z.ZodType<Prisma.GameTimeSelect> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeSelect>;
export const GameTimeSelectObjectZodSchema = makeSchema();
