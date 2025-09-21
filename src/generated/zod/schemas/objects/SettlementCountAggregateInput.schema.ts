import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  size: z.literal(true).optional(),
  governance: z.literal(true).optional(),
  inhabitants: z.literal(true).optional(),
  feature: z.literal(true).optional(),
  industry: z.literal(true).optional(),
  event: z.literal(true).optional(),
  population: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SettlementCountAggregateInputObjectSchema: z.ZodType<Prisma.SettlementCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SettlementCountAggregateInputType>;
export const SettlementCountAggregateInputObjectZodSchema = makeSchema();
