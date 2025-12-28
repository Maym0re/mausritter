import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema';
import { HexCellUncheckedCreateNestedManyWithoutSettlementInputObjectSchema as HexCellUncheckedCreateNestedManyWithoutSettlementInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutSettlementInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  size: SettlementSizeSchema,
  governance: z.string(),
  inhabitants: z.string(),
  feature: z.string(),
  industry: z.string(),
  event: z.string(),
  population: z.number().int(),
  HexCell: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutSettlementInputObjectSchema).optional()
}).strict();
export const SettlementUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SettlementUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementUncheckedCreateInput>;
export const SettlementUncheckedCreateInputObjectZodSchema = makeSchema();
