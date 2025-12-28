import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DiceRollLogOrderByWithRelationInputObjectSchema as DiceRollLogOrderByWithRelationInputObjectSchema } from './DiceRollLogOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  logId: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  sides: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  log: z.lazy(() => DiceRollLogOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DiceRollEntryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DiceRollEntryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryOrderByWithRelationInput>;
export const DiceRollEntryOrderByWithRelationInputObjectZodSchema = makeSchema();
