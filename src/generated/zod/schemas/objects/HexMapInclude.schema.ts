import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignArgsObjectSchema } from './CampaignArgs.schema';
import { HexCellFindManySchema } from '../findManyHexCell.schema';
import { MapImageFindManySchema } from '../findManyMapImage.schema';
import { MapMarkerFindManySchema } from '../findManyMapMarker.schema';
import { HexMapCountOutputTypeArgsObjectSchema } from './HexMapCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsObjectSchema)]).optional(),
  cells: z.union([z.boolean(), z.lazy(() => HexCellFindManySchema)]).optional(),
  images: z.union([z.boolean(), z.lazy(() => MapImageFindManySchema)]).optional(),
  markers: z.union([z.boolean(), z.lazy(() => MapMarkerFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => HexMapCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const HexMapIncludeObjectSchema: z.ZodType<Prisma.HexMapInclude> = makeSchema() as unknown as z.ZodType<Prisma.HexMapInclude>;
export const HexMapIncludeObjectZodSchema = makeSchema();
