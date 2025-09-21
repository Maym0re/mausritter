import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutHexMapInput.schema';
import { MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateNestedManyWithoutHexMapInput.schema';
import { MapMarkerUncheckedCreateNestedManyWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedCreateNestedManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  size: z.number().int().optional(),
  centerX: z.number().int().optional(),
  centerY: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  cells: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema),
  images: z.lazy(() => MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectSchema),
  markers: z.lazy(() => MapMarkerUncheckedCreateNestedManyWithoutHexMapInputObjectSchema)
}).strict();
export const HexMapUncheckedCreateInputObjectSchema: z.ZodType<Prisma.HexMapUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUncheckedCreateInput>;
export const HexMapUncheckedCreateInputObjectZodSchema = makeSchema();
