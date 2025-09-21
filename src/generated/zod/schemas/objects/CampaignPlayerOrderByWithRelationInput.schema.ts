import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CampaignOrderByWithRelationInputObjectSchema } from './CampaignOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  joinedAt: SortOrderSchema.optional(),
  campaign: z.lazy(() => CampaignOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CampaignPlayerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CampaignPlayerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerOrderByWithRelationInput>;
export const CampaignPlayerOrderByWithRelationInputObjectZodSchema = makeSchema();
