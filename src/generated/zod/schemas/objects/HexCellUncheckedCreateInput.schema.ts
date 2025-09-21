import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  hexMapId: z.string(),
  q: z.number().int(),
  r: z.number().int(),
  s: z.number().int(),
  hexTypeId: z.string(),
  landmarkId: z.string().optional().nullable(),
  landmarkDetailId: z.string().optional().nullable(),
  settlementId: z.string().optional().nullable(),
  isRevealed: z.boolean().optional(),
  notes: z.string().optional(),
  customName: z.string().optional().nullable(),
  masterNotes: z.string().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const HexCellUncheckedCreateInputObjectSchema: z.ZodType<Prisma.HexCellUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUncheckedCreateInput>;
export const HexCellUncheckedCreateInputObjectZodSchema = makeSchema();
