import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CampaignOrderByWithRelationInputObjectSchema as CampaignOrderByWithRelationInputObjectSchema } from './CampaignOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  rounds: SortOrderSchema.optional(),
  turns: SortOrderSchema.optional(),
  watches: SortOrderSchema.optional(),
  days: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  campaign: z.lazy(() => CampaignOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const GameTimeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GameTimeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeOrderByWithRelationInput>;
export const GameTimeOrderByWithRelationInputObjectZodSchema = makeSchema();
