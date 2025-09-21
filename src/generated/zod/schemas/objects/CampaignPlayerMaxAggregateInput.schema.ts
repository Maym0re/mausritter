import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  campaignId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  joinedAt: z.literal(true).optional()
}).strict();
export const CampaignPlayerMaxAggregateInputObjectSchema: z.ZodType<Prisma.CampaignPlayerMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerMaxAggregateInputType>;
export const CampaignPlayerMaxAggregateInputObjectZodSchema = makeSchema();
