import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HexMapOrderByWithRelationInputObjectSchema as HexMapOrderByWithRelationInputObjectSchema } from './HexMapOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  hexMapId: SortOrderSchema.optional(),
  data: SortOrderSchema.optional(),
  x: SortOrderSchema.optional(),
  y: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  hexMap: z.lazy(() => HexMapOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MapImageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MapImageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageOrderByWithRelationInput>;
export const MapImageOrderByWithRelationInputObjectZodSchema = makeSchema();
