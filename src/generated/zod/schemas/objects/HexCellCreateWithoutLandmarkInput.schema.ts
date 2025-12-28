import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateNestedOneWithoutCellsInputObjectSchema as HexMapCreateNestedOneWithoutCellsInputObjectSchema } from './HexMapCreateNestedOneWithoutCellsInput.schema';
import { HexTypeCreateNestedOneWithoutHexCellInputObjectSchema as HexTypeCreateNestedOneWithoutHexCellInputObjectSchema } from './HexTypeCreateNestedOneWithoutHexCellInput.schema';
import { LandmarkDetailCreateNestedOneWithoutHexCellInputObjectSchema as LandmarkDetailCreateNestedOneWithoutHexCellInputObjectSchema } from './LandmarkDetailCreateNestedOneWithoutHexCellInput.schema';
import { SettlementCreateNestedOneWithoutHexCellInputObjectSchema as SettlementCreateNestedOneWithoutHexCellInputObjectSchema } from './SettlementCreateNestedOneWithoutHexCellInput.schema'

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
  landmarkDetail: z.lazy(() => LandmarkDetailCreateNestedOneWithoutHexCellInputObjectSchema).optional(),
  settlement: z.lazy(() => SettlementCreateNestedOneWithoutHexCellInputObjectSchema).optional()
}).strict();
export const HexCellCreateWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.HexCellCreateWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateWithoutLandmarkInput>;
export const HexCellCreateWithoutLandmarkInputObjectZodSchema = makeSchema();
