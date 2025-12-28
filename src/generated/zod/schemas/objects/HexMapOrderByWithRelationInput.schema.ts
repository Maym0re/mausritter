import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CampaignOrderByWithRelationInputObjectSchema as CampaignOrderByWithRelationInputObjectSchema } from './CampaignOrderByWithRelationInput.schema';
import { HexCellOrderByRelationAggregateInputObjectSchema as HexCellOrderByRelationAggregateInputObjectSchema } from './HexCellOrderByRelationAggregateInput.schema';
import { MapImageOrderByRelationAggregateInputObjectSchema as MapImageOrderByRelationAggregateInputObjectSchema } from './MapImageOrderByRelationAggregateInput.schema';
import { MapMarkerOrderByRelationAggregateInputObjectSchema as MapMarkerOrderByRelationAggregateInputObjectSchema } from './MapMarkerOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  centerX: SortOrderSchema.optional(),
  centerY: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  campaign: z.lazy(() => CampaignOrderByWithRelationInputObjectSchema).optional(),
  cells: z.lazy(() => HexCellOrderByRelationAggregateInputObjectSchema).optional(),
  images: z.lazy(() => MapImageOrderByRelationAggregateInputObjectSchema).optional(),
  markers: z.lazy(() => MapMarkerOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const HexMapOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.HexMapOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapOrderByWithRelationInput>;
export const HexMapOrderByWithRelationInputObjectZodSchema = makeSchema();
