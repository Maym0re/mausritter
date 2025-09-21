import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellFindManySchema } from '../findManyHexCell.schema';
import { SettlementCountOutputTypeArgsObjectSchema } from './SettlementCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  HexCell: z.union([z.boolean(), z.lazy(() => HexCellFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SettlementCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SettlementIncludeObjectSchema: z.ZodType<Prisma.SettlementInclude> = makeSchema() as unknown as z.ZodType<Prisma.SettlementInclude>;
export const SettlementIncludeObjectZodSchema = makeSchema();
