import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateNestedOneWithoutHexMapInputObjectSchema } from './CampaignCreateNestedOneWithoutHexMapInput.schema';
import { HexCellCreateNestedManyWithoutHexMapInputObjectSchema } from './HexCellCreateNestedManyWithoutHexMapInput.schema';
import { MapImageCreateNestedManyWithoutHexMapInputObjectSchema } from './MapImageCreateNestedManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: z.number().int().optional(),
  centerX: z.number().int().optional(),
  centerY: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutHexMapInputObjectSchema),
  cells: z.lazy(() => HexCellCreateNestedManyWithoutHexMapInputObjectSchema).optional(),
  images: z.lazy(() => MapImageCreateNestedManyWithoutHexMapInputObjectSchema).optional()
}).strict();
export const HexMapCreateWithoutMarkersInputObjectSchema: z.ZodType<Prisma.HexMapCreateWithoutMarkersInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateWithoutMarkersInput>;
export const HexMapCreateWithoutMarkersInputObjectZodSchema = makeSchema();
