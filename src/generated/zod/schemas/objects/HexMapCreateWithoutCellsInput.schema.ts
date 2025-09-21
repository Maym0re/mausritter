import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateNestedOneWithoutHexMapInputObjectSchema } from './CampaignCreateNestedOneWithoutHexMapInput.schema';
import { MapImageCreateNestedManyWithoutHexMapInputObjectSchema } from './MapImageCreateNestedManyWithoutHexMapInput.schema';
import { MapMarkerCreateNestedManyWithoutHexMapInputObjectSchema } from './MapMarkerCreateNestedManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: z.number().int().optional(),
  centerX: z.number().int().optional(),
  centerY: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutHexMapInputObjectSchema),
  images: z.lazy(() => MapImageCreateNestedManyWithoutHexMapInputObjectSchema).optional(),
  markers: z.lazy(() => MapMarkerCreateNestedManyWithoutHexMapInputObjectSchema).optional()
}).strict();
export const HexMapCreateWithoutCellsInputObjectSchema: z.ZodType<Prisma.HexMapCreateWithoutCellsInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateWithoutCellsInput>;
export const HexMapCreateWithoutCellsInputObjectZodSchema = makeSchema();
