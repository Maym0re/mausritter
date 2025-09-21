import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumSettlementSizeWithAggregatesFilterObjectSchema } from './EnumSettlementSizeWithAggregatesFilter.schema';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const settlementscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SettlementScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SettlementScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SettlementScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettlementScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SettlementScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => EnumSettlementSizeWithAggregatesFilterObjectSchema), SettlementSizeSchema]).optional(),
  governance: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  inhabitants: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  feature: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  industry: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  event: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  population: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const SettlementScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SettlementScalarWhereWithAggregatesInput> = settlementscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SettlementScalarWhereWithAggregatesInput>;
export const SettlementScalarWhereWithAggregatesInputObjectZodSchema = settlementscalarwherewithaggregatesinputSchema;
