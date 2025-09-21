import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  gmId: z.literal(true).optional(),
  season: z.literal(true).optional(),
  weatherEntryId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  todaysEvent: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CampaignCountAggregateInputObjectSchema: z.ZodType<Prisma.CampaignCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCountAggregateInputType>;
export const CampaignCountAggregateInputObjectZodSchema = makeSchema();
