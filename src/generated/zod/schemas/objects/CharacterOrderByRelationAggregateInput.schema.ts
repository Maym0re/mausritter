import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CharacterOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CharacterOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterOrderByRelationAggregateInput>;
export const CharacterOrderByRelationAggregateInputObjectZodSchema = makeSchema();
