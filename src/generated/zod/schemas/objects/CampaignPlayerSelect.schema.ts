import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignArgsObjectSchema as CampaignArgsObjectSchema } from './CampaignArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  campaignId: z.boolean().optional(),
  userId: z.boolean().optional(),
  campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  joinedAt: z.boolean().optional()
}).strict();
export const CampaignPlayerSelectObjectSchema: z.ZodType<Prisma.CampaignPlayerSelect> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerSelect>;
export const CampaignPlayerSelectObjectZodSchema = makeSchema();
