import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sign: z.literal(true).optional(),
  disposition: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const BirthsignMaxAggregateInputObjectSchema: z.ZodType<Prisma.BirthsignMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignMaxAggregateInputType>;
export const BirthsignMaxAggregateInputObjectZodSchema = makeSchema();
