import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  gmId: SortOrderSchema.optional(),
  season: SortOrderSchema.optional(),
  weatherEntryId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  todaysEvent: SortOrderSchema.optional()
}).strict();
export const CampaignMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CampaignMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignMaxOrderByAggregateInput>;
export const CampaignMaxOrderByAggregateInputObjectZodSchema = makeSchema();
