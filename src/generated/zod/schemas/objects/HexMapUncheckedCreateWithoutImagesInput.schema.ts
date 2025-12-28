import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema as HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutHexMapInput.schema';
import { MapMarkerUncheckedCreateNestedManyWithoutHexMapInputObjectSchema as MapMarkerUncheckedCreateNestedManyWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedCreateNestedManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  size: z.number().int().optional(),
  centerX: z.number().int().optional(),
  centerY: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cells: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema).optional(),
  markers: z.lazy(() => MapMarkerUncheckedCreateNestedManyWithoutHexMapInputObjectSchema).optional()
}).strict();
export const HexMapUncheckedCreateWithoutImagesInputObjectSchema: z.ZodType<Prisma.HexMapUncheckedCreateWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUncheckedCreateWithoutImagesInput>;
export const HexMapUncheckedCreateWithoutImagesInputObjectZodSchema = makeSchema();
