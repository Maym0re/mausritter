import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CampaignPlayerOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CampaignPlayerOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerOrderByRelationAggregateInput>;
export const CampaignPlayerOrderByRelationAggregateInputObjectZodSchema = makeSchema();
