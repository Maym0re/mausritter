import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DiceRollEntryOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollEntryOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryOrderByRelationAggregateInput>;
export const DiceRollEntryOrderByRelationAggregateInputObjectZodSchema = makeSchema();
