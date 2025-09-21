import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CampaignOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CampaignOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignOrderByRelationAggregateInput>;
export const CampaignOrderByRelationAggregateInputObjectZodSchema = makeSchema();
