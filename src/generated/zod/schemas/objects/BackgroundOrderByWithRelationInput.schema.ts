import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CharacterOrderByRelationAggregateInputObjectSchema } from './CharacterOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  itemA: SortOrderSchema.optional(),
  itemB: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  characters: z.lazy(() => CharacterOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const BackgroundOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BackgroundOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundOrderByWithRelationInput>;
export const BackgroundOrderByWithRelationInputObjectZodSchema = makeSchema();
