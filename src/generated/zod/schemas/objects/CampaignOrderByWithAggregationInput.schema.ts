import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CampaignCountOrderByAggregateInputObjectSchema } from './CampaignCountOrderByAggregateInput.schema';
import { CampaignMaxOrderByAggregateInputObjectSchema } from './CampaignMaxOrderByAggregateInput.schema';
import { CampaignMinOrderByAggregateInputObjectSchema } from './CampaignMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  gmId: SortOrderSchema.optional(),
  season: SortOrderSchema.optional(),
  weatherEntryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  todaysEvent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => CampaignCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CampaignMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CampaignMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CampaignOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CampaignOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignOrderByWithAggregationInput>;
export const CampaignOrderByWithAggregationInputObjectZodSchema = makeSchema();
