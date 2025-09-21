import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateNestedOneWithoutHexMapInputObjectSchema } from './CampaignCreateNestedOneWithoutHexMapInput.schema';
import { HexCellCreateNestedManyWithoutHexMapInputObjectSchema } from './HexCellCreateNestedManyWithoutHexMapInput.schema';
import { MapImageCreateNestedManyWithoutHexMapInputObjectSchema } from './MapImageCreateNestedManyWithoutHexMapInput.schema';
import { MapMarkerCreateNestedManyWithoutHexMapInputObjectSchema } from './MapMarkerCreateNestedManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: z.number().int().optional(),
  centerX: z.number().int().optional(),
  centerY: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutHexMapInputObjectSchema),
  cells: z.lazy(() => HexCellCreateNestedManyWithoutHexMapInputObjectSchema),
  images: z.lazy(() => MapImageCreateNestedManyWithoutHexMapInputObjectSchema),
  markers: z.lazy(() => MapMarkerCreateNestedManyWithoutHexMapInputObjectSchema)
}).strict();
export const HexMapCreateInputObjectSchema: z.ZodType<Prisma.HexMapCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateInput>;
export const HexMapCreateInputObjectZodSchema = makeSchema();
