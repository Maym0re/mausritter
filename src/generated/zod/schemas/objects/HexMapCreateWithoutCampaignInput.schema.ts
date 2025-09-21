import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateNestedManyWithoutHexMapInputObjectSchema } from './HexCellCreateNestedManyWithoutHexMapInput.schema';
import { MapImageCreateNestedManyWithoutHexMapInputObjectSchema } from './MapImageCreateNestedManyWithoutHexMapInput.schema';
import { MapMarkerCreateNestedManyWithoutHexMapInputObjectSchema } from './MapMarkerCreateNestedManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: z.number().int().optional(),
  centerX: z.number().int().optional(),
  centerY: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cells: z.lazy(() => HexCellCreateNestedManyWithoutHexMapInputObjectSchema).optional(),
  images: z.lazy(() => MapImageCreateNestedManyWithoutHexMapInputObjectSchema).optional(),
  markers: z.lazy(() => MapMarkerCreateNestedManyWithoutHexMapInputObjectSchema).optional()
}).strict();
export const HexMapCreateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.HexMapCreateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateWithoutCampaignInput>;
export const HexMapCreateWithoutCampaignInputObjectZodSchema = makeSchema();
