import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema as HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema } from './HexCellUncheckedCreateNestedManyWithoutHexMapInput.schema';
import { MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectSchema as MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateNestedManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  size: z.number().int().optional(),
  centerX: z.number().int().optional(),
  centerY: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cells: z.lazy(() => HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema).optional(),
  images: z.lazy(() => MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectSchema).optional()
}).strict();
export const HexMapUncheckedCreateWithoutMarkersInputObjectSchema: z.ZodType<Prisma.HexMapUncheckedCreateWithoutMarkersInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUncheckedCreateWithoutMarkersInput>;
export const HexMapUncheckedCreateWithoutMarkersInputObjectZodSchema = makeSchema();
