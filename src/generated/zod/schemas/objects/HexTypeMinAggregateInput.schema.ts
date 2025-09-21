import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  color: z.literal(true).optional(),
  description: z.literal(true).optional()
}).strict();
export const HexTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.HexTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeMinAggregateInputType>;
export const HexTypeMinAggregateInputObjectZodSchema = makeSchema();
