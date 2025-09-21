import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSettlementSizeFilterObjectSchema } from './EnumSettlementSizeFilter.schema';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { HexCellListRelationFilterObjectSchema } from './HexCellListRelationFilter.schema'

const settlementwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SettlementWhereInputObjectSchema), z.lazy(() => SettlementWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SettlementWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettlementWhereInputObjectSchema), z.lazy(() => SettlementWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => EnumSettlementSizeFilterObjectSchema), SettlementSizeSchema]).optional(),
  governance: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  inhabitants: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  feature: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  industry: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  event: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  population: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  HexCell: z.lazy(() => HexCellListRelationFilterObjectSchema).optional()
}).strict();
export const SettlementWhereInputObjectSchema: z.ZodType<Prisma.SettlementWhereInput> = settlementwhereinputSchema as unknown as z.ZodType<Prisma.SettlementWhereInput>;
export const SettlementWhereInputObjectZodSchema = settlementwhereinputSchema;
