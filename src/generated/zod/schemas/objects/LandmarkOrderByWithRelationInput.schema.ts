import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HexTypeOrderByWithRelationInputObjectSchema as HexTypeOrderByWithRelationInputObjectSchema } from './HexTypeOrderByWithRelationInput.schema';
import { LandmarkDetailOrderByRelationAggregateInputObjectSchema as LandmarkDetailOrderByRelationAggregateInputObjectSchema } from './LandmarkDetailOrderByRelationAggregateInput.schema';
import { HexCellOrderByRelationAggregateInputObjectSchema as HexCellOrderByRelationAggregateInputObjectSchema } from './HexCellOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  hexTypeId: SortOrderSchema.optional(),
  hexType: z.lazy(() => HexTypeOrderByWithRelationInputObjectSchema).optional(),
  details: z.lazy(() => LandmarkDetailOrderByRelationAggregateInputObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const LandmarkOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LandmarkOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkOrderByWithRelationInput>;
export const LandmarkOrderByWithRelationInputObjectZodSchema = makeSchema();
