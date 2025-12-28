import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  campaignId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  joinedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CampaignPlayerCountAggregateInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCountAggregateInputType>;
export const CampaignPlayerCountAggregateInputObjectZodSchema = makeSchema();
