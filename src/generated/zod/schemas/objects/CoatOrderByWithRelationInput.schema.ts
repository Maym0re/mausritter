import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CharacterOrderByRelationAggregateInputObjectSchema } from './CharacterOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  pattern: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  characters: z.lazy(() => CharacterOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CoatOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CoatOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatOrderByWithRelationInput>;
export const CoatOrderByWithRelationInputObjectZodSchema = makeSchema();
