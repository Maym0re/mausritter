import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereInputObjectSchema as HexCellWhereInputObjectSchema } from './HexCellWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereInputObjectSchema).optional()
}).strict();
export const SettlementCountOutputTypeCountHexCellArgsObjectSchema = makeSchema();
export const SettlementCountOutputTypeCountHexCellArgsObjectZodSchema = makeSchema();
