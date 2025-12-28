import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema as AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { CampaignOrderByRelationAggregateInputObjectSchema as CampaignOrderByRelationAggregateInputObjectSchema } from './CampaignOrderByRelationAggregateInput.schema';
import { CharacterOrderByRelationAggregateInputObjectSchema as CharacterOrderByRelationAggregateInputObjectSchema } from './CharacterOrderByRelationAggregateInput.schema';
import { CampaignPlayerOrderByRelationAggregateInputObjectSchema as CampaignPlayerOrderByRelationAggregateInputObjectSchema } from './CampaignPlayerOrderByRelationAggregateInput.schema';
import { DiceRollLogOrderByRelationAggregateInputObjectSchema as DiceRollLogOrderByRelationAggregateInputObjectSchema } from './DiceRollLogOrderByRelationAggregateInput.schema'

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
