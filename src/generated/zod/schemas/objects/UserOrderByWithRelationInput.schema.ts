import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { CampaignOrderByRelationAggregateInputObjectSchema } from './CampaignOrderByRelationAggregateInput.schema';
import { CharacterOrderByRelationAggregateInputObjectSchema } from './CharacterOrderByRelationAggregateInput.schema';
import { CampaignPlayerOrderByRelationAggregateInputObjectSchema } from './CampaignPlayerOrderByRelationAggregateInput.schema';
import { DiceRollLogOrderByRelationAggregateInputObjectSchema } from './DiceRollLogOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  emailVerified: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  password: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  ownedCampaigns: z.lazy(() => CampaignOrderByRelationAggregateInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterOrderByRelationAggregateInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerOrderByRelationAggregateInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
