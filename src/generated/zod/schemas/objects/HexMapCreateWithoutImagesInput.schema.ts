import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateNestedOneWithoutHexMapInputObjectSchema as CampaignCreateNestedOneWithoutHexMapInputObjectSchema } from './CampaignCreateNestedOneWithoutHexMapInput.schema';
import { HexCellCreateNestedManyWithoutHexMapInputObjectSchema as HexCellCreateNestedManyWithoutHexMapInputObjectSchema } from './HexCellCreateNestedManyWithoutHexMapInput.schema';
import { MapMarkerCreateNestedManyWithoutHexMapInputObjectSchema as MapMarkerCreateNestedManyWithoutHexMapInputObjectSchema } from './MapMarkerCreateNestedManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: z.number().int().optional(),
  centerX: z.number().int().optional(),
  centerY: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutHexMapInputObjectSchema),
  cells: z.lazy(() => HexCellCreateNestedManyWithoutHexMapInputObjectSchema).optional(),
  markers: z.lazy(() => MapMarkerCreateNestedManyWithoutHexMapInputObjectSchema).optional()
}).strict();
export const HexMapCreateWithoutImagesInputObjectSchema: z.ZodType<Prisma.HexMapCreateWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateWithoutImagesInput>;
export const HexMapCreateWithoutImagesInputObjectZodSchema = makeSchema();
