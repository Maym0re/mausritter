import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HexCellOrderByRelationAggregateInputObjectSchema as HexCellOrderByRelationAggregateInputObjectSchema } from './HexCellOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  governance: SortOrderSchema.optional(),
  inhabitants: SortOrderSchema.optional(),
  feature: SortOrderSchema.optional(),
  industry: SortOrderSchema.optional(),
  event: SortOrderSchema.optional(),
  population: SortOrderSchema.optional(),
  HexCell: z.lazy(() => HexCellOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SettlementOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SettlementOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementOrderByWithRelationInput>;
export const SettlementOrderByWithRelationInputObjectZodSchema = makeSchema();
