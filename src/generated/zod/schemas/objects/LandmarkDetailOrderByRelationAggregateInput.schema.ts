import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const LandmarkDetailOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.LandmarkDetailOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailOrderByRelationAggregateInput>;
export const LandmarkDetailOrderByRelationAggregateInputObjectZodSchema = makeSchema();
