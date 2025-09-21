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
export const SettlementCreateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.SettlementCreateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementCreateWithoutHexCellInput>;
export const SettlementCreateWithoutHexCellInputObjectZodSchema = makeSchema();
