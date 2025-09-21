import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  joinedAt: SortOrderSchema.optional()
}).strict();
export const CampaignPlayerCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCountOrderByAggregateInput>;
export const CampaignPlayerCountOrderByAggregateInputObjectZodSchema = makeSchema();
