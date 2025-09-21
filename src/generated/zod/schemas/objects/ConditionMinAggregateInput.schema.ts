import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  clearRequirement: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ConditionMinAggregateInputObjectSchema: z.ZodType<Prisma.ConditionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConditionMinAggregateInputType>;
export const ConditionMinAggregateInputObjectZodSchema = makeSchema();
