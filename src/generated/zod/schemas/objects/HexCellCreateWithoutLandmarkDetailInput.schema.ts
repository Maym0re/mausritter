import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateNestedOneWithoutCellsInputObjectSchema } from './HexMapCreateNestedOneWithoutCellsInput.schema';
import { HexTypeCreateNestedOneWithoutHexCellInputObjectSchema } from './HexTypeCreateNestedOneWithoutHexCellInput.schema';
import { LandmarkCreateNestedOneWithoutHexCellInputObjectSchema } from './LandmarkCreateNestedOneWithoutHexCellInput.schema';
import { SettlementCreateNestedOneWithoutHexCellInputObjectSchema } from './SettlementCreateNestedOneWithoutHexCellInput.schema'

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
  settlement: z.lazy(() => SettlementCreateNestedOneWithoutHexCellInputObjectSchema).optional()
}).strict();
export const HexCellCreateWithoutLandmarkDetailInputObjectSchema: z.ZodType<Prisma.HexCellCreateWithoutLandmarkDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateWithoutLandmarkDetailInput>;
export const HexCellCreateWithoutLandmarkDetailInputObjectZodSchema = makeSchema();
