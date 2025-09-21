import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutHexMapInput.schema';
import { MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateNestedManyWithoutHexMapInput.schema';
import { MapMarkerUncheckedCreateNestedManyWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedCreateNestedManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: z.number().int().optional(),
  centerX: z.number().int().optional(),
  centerY: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cells: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema).optional(),
  images: z.lazy(() => MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectSchema).optional(),
  markers: z.lazy(() => MapMarkerUncheckedCreateNestedManyWithoutHexMapInputObjectSchema).optional()
}).strict();
export const HexMapUncheckedCreateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.HexMapUncheckedCreateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUncheckedCreateWithoutCampaignInput>;
export const HexMapUncheckedCreateWithoutCampaignInputObjectZodSchema = makeSchema();
