import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DiceRollLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogOrderByRelationAggregateInput>;
export const DiceRollLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
