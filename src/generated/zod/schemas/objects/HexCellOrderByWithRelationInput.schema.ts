import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { HexMapOrderByWithRelationInputObjectSchema as HexMapOrderByWithRelationInputObjectSchema } from './HexMapOrderByWithRelationInput.schema';
import { HexTypeOrderByWithRelationInputObjectSchema as HexTypeOrderByWithRelationInputObjectSchema } from './HexTypeOrderByWithRelationInput.schema';
import { LandmarkOrderByWithRelationInputObjectSchema as LandmarkOrderByWithRelationInputObjectSchema } from './LandmarkOrderByWithRelationInput.schema';
import { LandmarkDetailOrderByWithRelationInputObjectSchema as LandmarkDetailOrderByWithRelationInputObjectSchema } from './LandmarkDetailOrderByWithRelationInput.schema';
import { SettlementOrderByWithRelationInputObjectSchema as SettlementOrderByWithRelationInputObjectSchema } from './SettlementOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  hexMapId: SortOrderSchema.optional(),
  q: SortOrderSchema.optional(),
  r: SortOrderSchema.optional(),
  s: SortOrderSchema.optional(),
  hexTypeId: SortOrderSchema.optional(),
  landmarkId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  landmarkDetailId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  settlementId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isRevealed: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  customName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  masterNotes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  hexMap: z.lazy(() => HexMapOrderByWithRelationInputObjectSchema).optional(),
  hexType: z.lazy(() => HexTypeOrderByWithRelationInputObjectSchema).optional(),
  landmark: z.lazy(() => LandmarkOrderByWithRelationInputObjectSchema).optional(),
  landmarkDetail: z.lazy(() => LandmarkDetailOrderByWithRelationInputObjectSchema).optional(),
  settlement: z.lazy(() => SettlementOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const HexCellOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.HexCellOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellOrderByWithRelationInput>;
export const HexCellOrderByWithRelationInputObjectZodSchema = makeSchema();
