import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema';
import { HexCellCreateNestedManyWithoutSettlementInputObjectSchema } from './HexCellCreateNestedManyWithoutSettlementInput.schema'

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
  HexCell: z.lazy(() => HexCellCreateNestedManyWithoutSettlementInputObjectSchema)
}).strict();
export const SettlementCreateInputObjectSchema: z.ZodType<Prisma.SettlementCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementCreateInput>;
export const SettlementCreateInputObjectZodSchema = makeSchema();
