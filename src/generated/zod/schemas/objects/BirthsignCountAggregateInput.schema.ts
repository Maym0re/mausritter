import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sign: z.literal(true).optional(),
  disposition: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BirthsignCountAggregateInputObjectSchema: z.ZodType<Prisma.BirthsignCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignCountAggregateInputType>;
export const BirthsignCountAggregateInputObjectZodSchema = makeSchema();
