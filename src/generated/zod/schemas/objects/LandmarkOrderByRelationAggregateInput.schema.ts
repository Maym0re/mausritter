import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const LandmarkOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.LandmarkOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkOrderByRelationAggregateInput>;
export const LandmarkOrderByRelationAggregateInputObjectZodSchema = makeSchema();
