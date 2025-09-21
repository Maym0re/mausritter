import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LandmarkOrderByWithRelationInputObjectSchema } from './LandmarkOrderByWithRelationInput.schema';
import { HexCellOrderByRelationAggregateInputObjectSchema } from './HexCellOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  effect: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  landmarkId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Landmark: z.lazy(() => LandmarkOrderByWithRelationInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const LandmarkDetailOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LandmarkDetailOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailOrderByWithRelationInput>;
export const LandmarkDetailOrderByWithRelationInputObjectZodSchema = makeSchema();
