import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  hexMapId: z.literal(true).optional(),
  q: z.literal(true).optional(),
  r: z.literal(true).optional(),
  s: z.literal(true).optional(),
  hexTypeId: z.literal(true).optional(),
  landmarkId: z.literal(true).optional(),
  landmarkDetailId: z.literal(true).optional(),
  settlementId: z.literal(true).optional(),
  isRevealed: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  customName: z.literal(true).optional(),
  masterNotes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const HexCellMinAggregateInputObjectSchema: z.ZodType<Prisma.HexCellMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HexCellMinAggregateInputType>;
export const HexCellMinAggregateInputObjectZodSchema = makeSchema();
