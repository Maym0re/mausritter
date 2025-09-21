import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  size: SettlementSizeSchema,
  governance: z.string(),
  inhabitants: z.string(),
  feature: z.string(),
  industry: z.string(),
  event: z.string(),
  population: z.number().int()
}).strict();
export const SettlementCreateManyInputObjectSchema: z.ZodType<Prisma.SettlementCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementCreateManyInput>;
export const SettlementCreateManyInputObjectZodSchema = makeSchema();
