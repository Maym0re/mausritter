import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementCountOutputTypeCountHexCellArgsObjectSchema as SettlementCountOutputTypeCountHexCellArgsObjectSchema } from './SettlementCountOutputTypeCountHexCellArgs.schema'

const makeSchema = () => z.object({
  HexCell: z.union([z.boolean(), z.lazy(() => SettlementCountOutputTypeCountHexCellArgsObjectSchema)]).optional()
}).strict();
export const SettlementCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SettlementCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SettlementCountOutputTypeSelect>;
export const SettlementCountOutputTypeSelectObjectZodSchema = makeSchema();
