import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CampaignOrderByWithRelationInputObjectSchema as CampaignOrderByWithRelationInputObjectSchema } from './CampaignOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { DiceRollEntryOrderByRelationAggregateInputObjectSchema as DiceRollEntryOrderByRelationAggregateInputObjectSchema } from './DiceRollEntryOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  notation: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  campaign: z.lazy(() => CampaignOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  entries: z.lazy(() => DiceRollEntryOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DiceRollLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DiceRollLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogOrderByWithRelationInput>;
export const DiceRollLogOrderByWithRelationInputObjectZodSchema = makeSchema();
