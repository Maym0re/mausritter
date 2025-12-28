import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  population: z.literal(true).optional()
}).strict();
export const SettlementAvgAggregateInputObjectSchema: z.ZodType<Prisma.SettlementAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SettlementAvgAggregateInputType>;
export const SettlementAvgAggregateInputObjectZodSchema = makeSchema();
