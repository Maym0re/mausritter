import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellFindManySchema } from '../findManyHexCell.schema';
import { SettlementCountOutputTypeArgsObjectSchema } from './SettlementCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  size: z.boolean().optional(),
  governance: z.boolean().optional(),
  inhabitants: z.boolean().optional(),
  feature: z.boolean().optional(),
  industry: z.boolean().optional(),
  event: z.boolean().optional(),
  population: z.boolean().optional(),
  HexCell: z.union([z.boolean(), z.lazy(() => HexCellFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SettlementCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SettlementSelectObjectSchema: z.ZodType<Prisma.SettlementSelect> = makeSchema() as unknown as z.ZodType<Prisma.SettlementSelect>;
export const SettlementSelectObjectZodSchema = makeSchema();
