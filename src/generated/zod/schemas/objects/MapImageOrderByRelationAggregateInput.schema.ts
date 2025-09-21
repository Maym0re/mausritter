import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MapImageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MapImageOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageOrderByRelationAggregateInput>;
export const MapImageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
