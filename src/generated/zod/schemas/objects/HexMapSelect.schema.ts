import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignArgsObjectSchema as CampaignArgsObjectSchema } from './CampaignArgs.schema';
import { HexCellFindManySchema as HexCellFindManySchema } from '../findManyHexCell.schema';
import { MapImageFindManySchema as MapImageFindManySchema } from '../findManyMapImage.schema';
import { MapMarkerFindManySchema as MapMarkerFindManySchema } from '../findManyMapMarker.schema';
import { HexMapCountOutputTypeArgsObjectSchema as HexMapCountOutputTypeArgsObjectSchema } from './HexMapCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  campaignId: z.boolean().optional(),
  campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsObjectSchema)]).optional(),
  size: z.boolean().optional(),
  centerX: z.boolean().optional(),
  centerY: z.boolean().optional(),
  cells: z.union([z.boolean(), z.lazy(() => HexCellFindManySchema)]).optional(),
  images: z.union([z.boolean(), z.lazy(() => MapImageFindManySchema)]).optional(),
  markers: z.union([z.boolean(), z.lazy(() => MapMarkerFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => HexMapCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const HexMapSelectObjectSchema: z.ZodType<Prisma.HexMapSelect> = makeSchema() as unknown as z.ZodType<Prisma.HexMapSelect>;
export const HexMapSelectObjectZodSchema = makeSchema();
