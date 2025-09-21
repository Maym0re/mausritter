import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CharacterOrderByRelationAggregateInputObjectSchema } from './CharacterOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  clearRequirement: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  effects: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  characters: z.lazy(() => CharacterOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ConditionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ConditionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionOrderByWithRelationInput>;
export const ConditionOrderByWithRelationInputObjectZodSchema = makeSchema();
