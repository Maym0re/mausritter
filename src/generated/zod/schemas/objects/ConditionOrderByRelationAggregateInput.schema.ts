import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ConditionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ConditionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionOrderByRelationAggregateInput>;
export const ConditionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
