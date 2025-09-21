import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CampaignScalarRelationFilterObjectSchema } from './CampaignScalarRelationFilter.schema';
import { CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema';
import { HexCellListRelationFilterObjectSchema } from './HexCellListRelationFilter.schema';
import { MapImageListRelationFilterObjectSchema } from './MapImageListRelationFilter.schema';
import { MapMarkerListRelationFilterObjectSchema } from './MapMarkerListRelationFilter.schema'

const hexmapwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => HexMapWhereInputObjectSchema), z.lazy(() => HexMapWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HexMapWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HexMapWhereInputObjectSchema), z.lazy(() => HexMapWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  centerX: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  centerY: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  campaign: z.union([z.lazy(() => CampaignScalarRelationFilterObjectSchema), z.lazy(() => CampaignWhereInputObjectSchema)]).optional(),
  cells: z.lazy(() => HexCellListRelationFilterObjectSchema).optional(),
  images: z.lazy(() => MapImageListRelationFilterObjectSchema).optional(),
  markers: z.lazy(() => MapMarkerListRelationFilterObjectSchema).optional()
}).strict();
export const HexMapWhereInputObjectSchema: z.ZodType<Prisma.HexMapWhereInput> = hexmapwhereinputSchema as unknown as z.ZodType<Prisma.HexMapWhereInput>;
export const HexMapWhereInputObjectZodSchema = hexmapwhereinputSchema;
