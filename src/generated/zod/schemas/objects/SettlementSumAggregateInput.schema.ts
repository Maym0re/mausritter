import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  population: z.literal(true).optional()
}).strict();
export const SettlementSumAggregateInputObjectSchema: z.ZodType<Prisma.SettlementSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SettlementSumAggregateInputType>;
export const SettlementSumAggregateInputObjectZodSchema = makeSchema();
