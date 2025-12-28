import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CampaignPlayerCountOrderByAggregateInputObjectSchema as CampaignPlayerCountOrderByAggregateInputObjectSchema } from './CampaignPlayerCountOrderByAggregateInput.schema';
import { CampaignPlayerMaxOrderByAggregateInputObjectSchema as CampaignPlayerMaxOrderByAggregateInputObjectSchema } from './CampaignPlayerMaxOrderByAggregateInput.schema';
import { CampaignPlayerMinOrderByAggregateInputObjectSchema as CampaignPlayerMinOrderByAggregateInputObjectSchema } from './CampaignPlayerMinOrderByAggregateInput.schema'

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
