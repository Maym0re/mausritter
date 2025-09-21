import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapArgsObjectSchema } from './HexMapArgs.schema';
import { HexTypeArgsObjectSchema } from './HexTypeArgs.schema';
import { LandmarkArgsObjectSchema } from './LandmarkArgs.schema';
import { LandmarkDetailArgsObjectSchema } from './LandmarkDetailArgs.schema';
import { SettlementArgsObjectSchema } from './SettlementArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  hexMapId: z.boolean().optional(),
  hexMap: z.union([z.boolean(), z.lazy(() => HexMapArgsObjectSchema)]).optional(),
  q: z.boolean().optional(),
  r: z.boolean().optional(),
  s: z.boolean().optional(),
  hexTypeId: z.boolean().optional(),
  hexType: z.union([z.boolean(), z.lazy(() => HexTypeArgsObjectSchema)]).optional(),
  landmarkId: z.boolean().optional(),
  landmark: z.union([z.boolean(), z.lazy(() => LandmarkArgsObjectSchema)]).optional(),
  landmarkDetailId: z.boolean().optional(),
  landmarkDetail: z.union([z.boolean(), z.lazy(() => LandmarkDetailArgsObjectSchema)]).optional(),
  settlementId: z.boolean().optional(),
  settlement: z.union([z.boolean(), z.lazy(() => SettlementArgsObjectSchema)]).optional(),
  isRevealed: z.boolean().optional(),
  notes: z.boolean().optional(),
  customName: z.boolean().optional(),
  masterNotes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const HexCellSelectObjectSchema: z.ZodType<Prisma.HexCellSelect> = makeSchema() as unknown as z.ZodType<Prisma.HexCellSelect>;
export const HexCellSelectObjectZodSchema = makeSchema();
