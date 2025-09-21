import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateNestedOneWithoutCellsInputObjectSchema } from './HexMapCreateNestedOneWithoutCellsInput.schema';
import { HexTypeCreateNestedOneWithoutHexCellInputObjectSchema } from './HexTypeCreateNestedOneWithoutHexCellInput.schema';
import { LandmarkCreateNestedOneWithoutHexCellInputObjectSchema } from './LandmarkCreateNestedOneWithoutHexCellInput.schema';
import { LandmarkDetailCreateNestedOneWithoutHexCellInputObjectSchema } from './LandmarkDetailCreateNestedOneWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  q: z.number().int(),
  r: z.number().int(),
  s: z.number().int(),
  isRevealed: z.boolean().optional(),
  notes: z.string().optional(),
  customName: z.string().optional().nullable(),
  masterNotes: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  hexMap: z.lazy(() => HexMapCreateNestedOneWithoutCellsInputObjectSchema),
  hexType: z.lazy(() => HexTypeCreateNestedOneWithoutHexCellInputObjectSchema),
  landmark: z.lazy(() => LandmarkCreateNestedOneWithoutHexCellInputObjectSchema).optional(),
  landmarkDetail: z.lazy(() => LandmarkDetailCreateNestedOneWithoutHexCellInputObjectSchema).optional()
}).strict();
export const HexCellCreateWithoutSettlementInputObjectSchema: z.ZodType<Prisma.HexCellCreateWithoutSettlementInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateWithoutSettlementInput>;
export const HexCellCreateWithoutSettlementInputObjectZodSchema = makeSchema();
