import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CharacterCountOrderByAggregateInputObjectSchema as CharacterCountOrderByAggregateInputObjectSchema } from './CharacterCountOrderByAggregateInput.schema';
import { CharacterAvgOrderByAggregateInputObjectSchema as CharacterAvgOrderByAggregateInputObjectSchema } from './CharacterAvgOrderByAggregateInput.schema';
import { CharacterMaxOrderByAggregateInputObjectSchema as CharacterMaxOrderByAggregateInputObjectSchema } from './CharacterMaxOrderByAggregateInput.schema';
import { CharacterMinOrderByAggregateInputObjectSchema as CharacterMinOrderByAggregateInputObjectSchema } from './CharacterMinOrderByAggregateInput.schema';
import { CharacterSumOrderByAggregateInputObjectSchema as CharacterSumOrderByAggregateInputObjectSchema } from './CharacterSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => CharacterCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CharacterAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CharacterMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CharacterMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CharacterSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CharacterOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CharacterOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterOrderByWithAggregationInput>;
export const CharacterOrderByWithAggregationInputObjectZodSchema = makeSchema();
