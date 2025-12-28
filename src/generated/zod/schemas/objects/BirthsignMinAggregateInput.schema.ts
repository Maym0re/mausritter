import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sign: z.literal(true).optional(),
  disposition: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const BirthsignMinAggregateInputObjectSchema: z.ZodType<Prisma.BirthsignMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignMinAggregateInputType>;
export const BirthsignMinAggregateInputObjectZodSchema = makeSchema();
