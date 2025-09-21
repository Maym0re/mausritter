import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LandmarkOrderByRelationAggregateInputObjectSchema } from './LandmarkOrderByRelationAggregateInput.schema';
import { HexCellOrderByRelationAggregateInputObjectSchema } from './HexCellOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  landmarks: z.lazy(() => LandmarkOrderByRelationAggregateInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const HexTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.HexTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeOrderByWithRelationInput>;
export const HexTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
