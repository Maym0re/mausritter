import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CharacterOrderByRelationAggregateInputObjectSchema } from './CharacterOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sign: SortOrderSchema.optional(),
  disposition: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  characters: z.lazy(() => CharacterOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const BirthsignOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BirthsignOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignOrderByWithRelationInput>;
export const BirthsignOrderByWithRelationInputObjectZodSchema = makeSchema();
