import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CampaignPlayerCountOrderByAggregateInputObjectSchema } from './CampaignPlayerCountOrderByAggregateInput.schema';
import { CampaignPlayerMaxOrderByAggregateInputObjectSchema } from './CampaignPlayerMaxOrderByAggregateInput.schema';
import { CampaignPlayerMinOrderByAggregateInputObjectSchema } from './CampaignPlayerMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  joinedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CampaignPlayerCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CampaignPlayerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CampaignPlayerMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CampaignPlayerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CampaignPlayerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerOrderByWithAggregationInput>;
export const CampaignPlayerOrderByWithAggregationInputObjectZodSchema = makeSchema();
