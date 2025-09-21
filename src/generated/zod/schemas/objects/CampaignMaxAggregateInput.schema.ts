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
  todaysEvent: z.literal(true).optional()
}).strict();
export const CampaignMaxAggregateInputObjectSchema: z.ZodType<Prisma.CampaignMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CampaignMaxAggregateInputType>;
export const CampaignMaxAggregateInputObjectZodSchema = makeSchema();
