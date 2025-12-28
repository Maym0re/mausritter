import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { CampaignOrderByWithRelationInputObjectSchema as CampaignOrderByWithRelationInputObjectSchema } from './CampaignOrderByWithRelationInput.schema';
import { BackgroundOrderByWithRelationInputObjectSchema as BackgroundOrderByWithRelationInputObjectSchema } from './BackgroundOrderByWithRelationInput.schema';
import { BirthsignOrderByWithRelationInputObjectSchema as BirthsignOrderByWithRelationInputObjectSchema } from './BirthsignOrderByWithRelationInput.schema';
import { CoatOrderByWithRelationInputObjectSchema as CoatOrderByWithRelationInputObjectSchema } from './CoatOrderByWithRelationInput.schema';
import { InventoryItemOrderByRelationAggregateInputObjectSchema as InventoryItemOrderByRelationAggregateInputObjectSchema } from './InventoryItemOrderByRelationAggregateInput.schema';
import { ConditionOrderByRelationAggregateInputObjectSchema as ConditionOrderByRelationAggregateInputObjectSchema } from './ConditionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  playerId: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  str: SortOrderSchema.optional(),
  dex: SortOrderSchema.optional(),
  wil: SortOrderSchema.optional(),
  hp: SortOrderSchema.optional(),
  maxHp: SortOrderSchema.optional(),
  backgroundId: SortOrderSchema.optional(),
  birthsignId: SortOrderSchema.optional(),
  coatId: SortOrderSchema.optional(),
  physicalDetail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  level: SortOrderSchema.optional(),
  xp: SortOrderSchema.optional(),
  grit: SortOrderSchema.optional(),
  pips: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  player: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  campaign: z.lazy(() => CampaignOrderByWithRelationInputObjectSchema).optional(),
  background: z.lazy(() => BackgroundOrderByWithRelationInputObjectSchema).optional(),
  birthsign: z.lazy(() => BirthsignOrderByWithRelationInputObjectSchema).optional(),
  coat: z.lazy(() => CoatOrderByWithRelationInputObjectSchema).optional(),
  inventory: z.lazy(() => InventoryItemOrderByRelationAggregateInputObjectSchema).optional(),
  conditions: z.lazy(() => ConditionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CharacterOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CharacterOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterOrderByWithRelationInput>;
export const CharacterOrderByWithRelationInputObjectZodSchema = makeSchema();
