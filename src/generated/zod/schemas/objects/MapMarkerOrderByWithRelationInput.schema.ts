import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HexMapOrderByWithRelationInputObjectSchema as HexMapOrderByWithRelationInputObjectSchema } from './HexMapOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  hexMapId: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  x: SortOrderSchema.optional(),
  y: SortOrderSchema.optional(),
  z: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  hexMap: z.lazy(() => HexMapOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MapMarkerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MapMarkerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerOrderByWithRelationInput>;
export const MapMarkerOrderByWithRelationInputObjectZodSchema = makeSchema();
