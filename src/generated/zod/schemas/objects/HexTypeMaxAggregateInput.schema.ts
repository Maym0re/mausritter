import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  color: z.literal(true).optional(),
  description: z.literal(true).optional()
}).strict();
export const HexTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.HexTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeMaxAggregateInputType>;
export const HexTypeMaxAggregateInputObjectZodSchema = makeSchema();
